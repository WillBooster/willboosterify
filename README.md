# willboosterify

:books::rocket: A tool for applying WillBooster's conventional configurations to npm packages

[![CircleCI](https://circleci.com/gh/WillBooster/willboosterify.svg?style=svg&circle-token=65b7bffdfe09f876e6a469a55212e34996b4f86e)](https://circleci.com/gh/WillBooster/willboosterify)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Motivation

There are some resources for creating a project with conventional configurations like [Yeoman](https://yeoman.io/), GitHub's Template repository, and starter-kit repositories.
However, we sometimes faced the cases where we wanted to apply conventional configurations to an existing repository, so we've launch this tool!

## Philosophy

This tool must keep idempotency, i.e., it always yields the same result when a user applies this tool to a project even multiple times.

## How to Use

1. `yarn`
1. `yarn start <project directory>`
