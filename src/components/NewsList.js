import React, { Component } from 'react';

import ListNewsItem from './ListNewsItem';

export default class NewsList extends Component {
  render() {
    return (
      <div className="flex justify-center pb-8 z-20">
        <div>
          {this.props.articles.map((article) => (
            <ListNewsItem key={article.publishedAt} article={article} />
          ))}
        </div>
      </div>
    );
  }
}
