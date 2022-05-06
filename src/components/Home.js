import React from 'react';

import { FaArrowCircleUp } from 'react-icons/fa';

import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

import NewsList from './NewsList';

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#20293C",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#20293C",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#20293C",
    },
    "&:hover fieldset": {
      borderColor: "#20293C",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#20293C",
    },
    "& .MuiInputBase-input": {
      fontFamily: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ].join(","),
    },
  },
});

/**
 * Adds two numbers together.
 * @param {int} e The first number.
 */
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      search: "",
      buttonText: "Dernières Actualités 🚀",
    };
  }

  handleNews = () => {
    if (this.state.articles.length) {
      this.setState({
        articles: [],
        buttonText: "Dernières Actualités 🚀",
      });
    } else {
      this.search();
    }
  };

  search = () => {
    if (this.state.search) {
      var axios = require("axios").default;

      var options = {
        method: "GET",
        url: "https://api.newscatcherapi.com/v2/search",
        params: {
          q: this.state.search,
          lang: "fr",
          sort_by: "relevancy",
          page: "1",
        },
        headers: {
          "x-api-key": "ZPcV5LnxuvSDctzSRzL9qlGI_cN25LVbfZrcr49k03E",
        },
      };

      axios
        .request(options)
        .then(async (response) => {
          let articles = response.data.articles;

          articles = articles.filter(
            (arr, index, self) =>
              index === self.findIndex((t) => t.title === arr.title)
          );

          this.setState({
            articles: articles,
            buttonText: "Effacer 🪄",
          });
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      var axios = require("axios").default;

      var options = {
        method: "GET",
        url: "https://api.newscatcherapi.com/v2/latest_headlines",
        params: {
          countries: "FR",
          lang: "fr",
        },
        headers: {
          "x-api-key": "ZPcV5LnxuvSDctzSRzL9qlGI_cN25LVbfZrcr49k03E",
        },
      };

      axios
        .request(options)
        .then(async (response) => {
          let articles = response.data.articles;

          articles = articles.filter(
            (arr, index, self) =>
              index === self.findIndex((t) => t.title === arr.title)
          );

          this.setState({
            articles: articles,
            buttonText: "Effacer 🪄",
          });

          console.log(articles);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
    this.setState({ search: "" });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.search();
  };

  handleClickTitle = () => {
    this.scrollTop();
    this.setState({
      articles: [],
      search: "",
      buttonText: "Dernières Actualités 🚀",
    });
  };

  handleChangeSearchField = (e) => {
    this.setState({ search: e.target.value });
  };

  scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  render() {
    return (
      <div className="bg-slate-800 max-w-full h-full min-h-screen font-mono text-white overflow-hidden">
        <main>
          <section
            className="fixed top-0 bg-slate-800 text-center w-screen h-20 z-10 cursor-pointer"
            onClick={this.handleClickTitle}
          >
            <h1 className="text-white text-center p-5 text-4xl">
              📰 ReactNews
            </h1>
          </section>

          <form onSubmit={this.handleSubmit}>
            <div className="bg-white p-2 mt-20 rounded-xl mx-2 sm:mx-40">
              <CssTextField
                id="outlined-basic"
                fullWidth
                label="Recherche"
                type="search"
                onChange={this.handleChangeSearchField}
                value={this.state.search}
                InputLabelProps={{
                  style: {
                    fontFamily: [
                      "ui-monospace",
                      "SFMono-Regular",
                      "Menlo",
                      "Monaco",
                      "Consolas",
                      "Liberation Mono",
                      "Courier New",
                      "monospace",
                    ].join(","),
                    fontSize: "15px",
                  },
                }}
              />
            </div>
          </form>

          <div className="flex justify-center mt-5">
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 w-64 h-12"
              onClick={this.handleNews}
            >
              {this.state.buttonText}
            </button>
          </div>

          <NewsList articles={this.state.articles} />
          <FaArrowCircleUp
            className="scrollTop text-slate-800 bg-white border-2 border-white rounded-full w-16 h-16 flex fixed bottom-14 md:right-14 right-6 cursor-pointer"
            onClick={this.scrollTop}
          />
        </main>
      </div>
    );
  }
}
