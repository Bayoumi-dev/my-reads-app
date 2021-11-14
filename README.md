# MyReads App

## Table of Contents

- [Overview](#overview)
- [Built with](#-built-with)
- [Install](#install) (How it works)
- [The Project Structure](#the-project-structure)
- [Backend Server](#backend-server)

## Overview

MyReads App is the third project of NANODEGREE program for the front web developer and the first project with React js in Advance track (Egypt FWD initiative & Udacity).

This project is a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read.

## ⚙ Built with

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)

## Install 
### How it works
You must install `Node js` on the local machine, 
then install the [`dependencies`](package.json) used in this project. Run the command in the root
```bash
npm install 
```
Start the development server with:
```bash
npm start
```
## The Project Structure
```bash
├── CONTRIBUTING.md
├── MyReads.fig # Figma File (I used Figma tool to design this app)
├── README.md 
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms 
├── package.json 
├── public
│   ├── favicon.png 
│   └── index.html 
└── src
    ├── api
    │   └── BooksAPI.js
    ├── components
    │   ├── Book.js
    │   ├── BookRating.js
    │   ├── BookShelfChanger.js
    │   ├── BooksShelf.js
    │   ├── Progress.js
    │   └── SearchInput.js
    ├── icons
    │   ├── index.js # SVG tags
    │   └──  ...SVG files
    ├── layout 
    │   ├── Footer.js
    │   ├── Header.js
    │   └── SideBar.js
    ├── pages 
    │   ├── index.js # Home
    │   └── Search.js
    ├── style 
    │   ├── App.css
    │   ├── index.css
    │   └── normalize.css
    ├── App.js 
    └── index.js 
```
## Backend Server

[Udacity](https://github.com/udacity/reactnd-project-myreads-starter#backend-server) has provided this file [`BooksAPI.js`](src/api/BooksAPI.js) that contains the following methods to perform necessary operations on the backend:

* `getAll()` To get all books from API
* `update()` To Update bookshelf
* `search()` To Search 

### Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend.
