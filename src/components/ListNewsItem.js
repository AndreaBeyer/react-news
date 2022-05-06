import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class ListNewsItem extends Component {
  render() {
    let img;
    if (this.props.article.media) {
      img = (
        <img
          className=" ml-5 max-w-[150px] max-h-[150px] flex-1 float-left"
          src={this.props.article.media}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = "/no-image-icon.png";
            currentTarget.classList.add("max-w-[100px]");
            currentTarget.classList.remove("max-w-[150px]");
            currentTarget.classList.add("max-h-[100px]");
            currentTarget.classList.remove("max-h-[150px]");
          }}
          alt="image de l'article"
        />
      );
    } else {
      img = (
        <img
          className=" ml-5 max-w-[100px] max-h-[100px] flex-1 float-left"
          src="/no-image-icon.png"
          alt="aucune image disponible"
        />
      );
    }
    return (
      <Link to="/details" state={{ article: this.props.article }}>
        <div className="rounded-xl bg-white text-black my-3 py-4 flex justify-center items-center mx-2 sm:mx-40">
          {img}
          <span className=" p-5 flex-auto float-right text-center">
            {this.props.article.title}
          </span>
        </div>
      </Link>
    );
  }
}
