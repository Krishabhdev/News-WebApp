import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defualtProps = {
    country: "in",
    pageSize: 6,
    PropTypes: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    PropTypes: PropTypes.string,
  };
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  articles = [];

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      articles: this.articles,
      loading: false,
      
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsCat`;
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6d53d6b9800245babb0fc1bfda17f2f2&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData, "parsedata");
    this.setState((this.articles = parseData.articles));
    console.log(parseData.articles, "parsedata.articles");

    console.log(parseData.articles.length, "check parseData.articles.length");

    this.setState({ totalResults: parseData.totalResults, loading: false });
    console.log(this.state.totalResults, "check this.state.totalresults");

  }

  async componentDidMount() {
    this.updateNews();
  }


  // HandleNextClick = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   console.log("page after next click", this.state.page);
  // };

   fetchMoreData = async ()=> {
    this.setState({ page: this.state.page + 1 });
    console.log(this.state.page, "page");
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6d53d6b9800245babb0fc1bfda17f2f2&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData, "parsedata");
    this.setState(
      (this.articles = this.articles.concat(parseData.articles))
    );
    console.log(parseData.articles, "parsedata.articles");

    console.log(parseData.articles.length, "check parseData.articles.length");

    this.setState({ totalResults: parseData.totalResults, loading: false });
    console.log(this.state.totalResults, "check this.state.totalresults");

    console.log(this.state.page, "check agn page");
  };

  render() {
    return (
     <div>
        <h1 className="text-center" style={{ margin: "40px,40px" }}>
          NewsCat - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h1>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<Spinner />}
        >
         
            <div className="row">
              {this.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      newsUrl={element.url}
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>

            <button onClick={this.HandleNextClick} >click me</button>
          
        </InfiniteScroll>
        </div>
    );
  }
}

export default News;
