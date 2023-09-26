# Donation Campaign Project

## Overview

The **Donation Campaign Project** is a web application built with React and React Router that allows users to explore and donate to various causes. The project has several features designed to make it easy for users to contribute to different categories of donations.

## Features

### Home Page

- The Home Page displays 12 different donation categories.
- Users can search for donations in four main categories.
- Each category contains three distinct donation options.

### Donation Details Page

- Users can click on a specific donation to view its details on a dedicated page.
- From the Donation Details Page, users can choose to make a donation to the selected cause.

### Donation Page

- Donations made by users are stored in local storage for reference.
- Users can review their past donations on the Donation Page.
- Donated data is organized by category and includes details about the contributions.

### Statistics Page

- The Statistics Page presents a pie chart that visualizes the percentage of total donations versus the user's donations.
- Users can quickly see their impact in comparison to the overall campaign.

## Design

### Home Page

- The Home Page features a grid of 12 donation categories, making it easy for users to explore various options.
- Users can search for specific categories, and the results update dynamically as they type.
- Each category is represented by a card containing a brief description and a "Donate" button.

### Donation Details Page

- The Donation Details Page displays comprehensive information about the selected donation, including its name, description, and donation options.
- Users can click a button to make a donation.

### Donation Page

- The Donation Page is a user-specific dashboard where users can review their previous contributions.
- Donations are organized by category, and each category contains a list of donations made.
- When the number of donations in a category exceeds four, a "See All" button appears.
- Clicking the "See All" button reveals the remaining donations in that category.
- Users can toggle between viewing all donations or just the first four by clicking the "See All" button again.

### Statistics Page

- The Statistics Page showcases a visually appealing pie chart.
- The chart illustrates the user's donations compared to the total campaign donations.
- Colors are used to distinguish between the user's donations and others.

