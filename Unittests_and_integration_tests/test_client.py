#!/usr/bin/env python3
"""Script contains tests for the client module"""
import unittest
import client
from client import GithubOrgClient
from parameterized import parameterized, parameterized_class
from unittest.mock import Mock, patch, PropertyMock
from typing import (
    List,
    Dict,
)


class TestGithubOrgClient(unittest.TestCase):
    """Class tests GitHubOrgClient Method(s)"""

    @parameterized.expand([
        ("google"),
        ("abc")
    ])
    @patch("client.get_json", return_value="")
    def test_org(self, org_name: str, mock_get: Mock):
        """Method tests GithubOrgClient org method"""

        mock_get.return_value = {"id": 1}

        org_client_instance = GithubOrgClient(org_name)
        result = org_client_instance.org

        expected_url = f"https://api.github.com/orgs/{org_name}"
        self.assertEqual(result, {"id": 1})
        mock_get.assert_called_once_with(expected_url)

    @patch("client.GithubOrgClient.org", new_callable=PropertyMock)
    def test_public_repos_url(self, mock_org: Mock):
        """Method tests _public_repos_url property"""
        mock_org.return_value = {
            "repos_url": "https://api.github.com/orgs/google/repos"}

        org_client_inst = GithubOrgClient("google")

        result = org_client_inst._public_repos_url

        self.assertEqual(result,  "https://api.github.com/orgs/google/repos")

    @parameterized.expand([
        ([
            {"name": "repo1", "license": {"key": "mit"}},
            {"name": "repo2", "license": {"key": "apache-2.0"}},
            {"name": "repo3", "license": None},
        ], ["repo1", "repo2", "repo3"])
    ])
    @patch("client.get_json")
    def test_public_repos(self, payload, expected, mock_get_json: Mock) -> None:
        """Method tests public)repos method"""
        mock_get_json.return_value = payload

        with patch.object(GithubOrgClient, "_public_repos_url",
                          new_callable=PropertyMock) as mock_public:

            mock_public.return_value = (
                "https://api.github.com/orgs/google/repos")

            client_inst = GithubOrgClient("google")

            result = client_inst.public_repos()

            self.assertEqual(result, expected)
            mock_get_json.assert_called_once_with(
                "https://api.github.com/orgs/google/repos")

    @parameterized.expand([
        ({"license": {"key": "my_license"}}, "my_license", True),
        ({"license": {"key": "other_license"}}, "my_license", False)
    ])
    def test_has_license(self, repo: Dict[str, Dict],
                         license_key: str, expected: bool):
        """Method tests has_license static method"""
        result = GithubOrgClient.has_license(repo, license_key)

        self.assertEqual(result, expected)


org_payload = {
    "login": "google",
    "id": 1342004,
    "node_id": "MDEyOk9yZ2FuaXphdGlvbjEzNDIwMDQ=",
    "url": "https://api.github.com/orgs/google",
    "repos_url": "https://api.github.com/orgs/google/repos",
    # Add other necessary fields
}

repos_payload = [
    {
        "id": 1,
        "name": "repo1",
        "full_name": "google/repo1",
        "license": {"key": "apache-2.0"}
    },
    {
        "id": 2,
        "name": "repo2",
        "full_name": "google/repo2",
        "license": {"key": "mit"}
    }
    # Add other necessary fields
]

expected_repos = ["repo1", "repo2"]
apache2_repos = ["repo1"]


@parameterized_class([
    {
        "org_payload": org_payload,
        "repos_payload": repos_payload,
        "expected_repos": expected_repos,
        "apache2_repos": apache2_repos
    }
])
class TestIntegrationGithubOrgClient(unittest.TestCase):
    """Integration tests for GithubOrgClient methods
    """

    @classmethod
    def setUpClass(cls):
        """Set up class method to patch requests.get"""
        cls.get_patcher = patch('requests.get')
        mock_get = cls.get_patcher.start()

        mock_get.side_effect = cls.get_side_effect

    @classmethod
    def tearDownClass(cls):
        """Tear down class method to stop patcher"""
        cls.get_patcher.stop()

    @staticmethod
    def get_side_effect(url):
        """Side effect method to return the appropriate fixture based on the
        URL"""
        if url == "https://api.github.com/orgs/google":
            return Mock(json=lambda: org_payload)
        if url == "https://api.github.com/orgs/google/repos":
            return Mock(json=lambda: repos_payload)
        return Mock(json=lambda: {})

    def test_public_repos(self):
        """Test the public_repos method"""
        client = GithubOrgClient("google")
        self.assertEqual(client.public_repos(), self.expected_repos)
        self.assertEqual(client.public_repos("apache-2.0"), self.apache2_repos)
