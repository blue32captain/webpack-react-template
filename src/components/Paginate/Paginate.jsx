import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CSSModules from 'react-css-modules'
import styles from './styles/Paginate.scss'

import ReactPaginate from 'react-paginate'

import Arrow from './Arrow'


class Paginate extends Component {

  constructor() {
    super();

    this.state = {
      pageCount: 0,
      offset: 9,
      activePage: 1,
      perPage: 9,
      data: [],
    };
  }

  componentDidMount() {
    this.setStateOnData()
  }

  setStateOnData = () => {
    this.loadPosts()
      .then(data => {
        this.setState((state) => {
          const pageCount = Math.ceil(data.length / state.perPage);

          return {
            data,
            pageCount,
          }
        })
      })
  };

  loadPosts = async () => await fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(result => result.json())
    .then(data => data)
    .catch((error) => {
      console.log(`Error ${error.msg || error}`);
      return []
    });

  handlePageClick = ({ selected }) => {
    const { offset, perPage } = this.state;

    let newOffset = Math.ceil(selected * perPage);

    if (!newOffset || newOffset === offset) {
      newOffset += perPage
    }

    this.setState(() => ({ offset: newOffset, activePage: selected + 1 }));
  };

  render() {
    const { data, offset, activePage } = this.state;

    return (
      <div>
        {
          data
            .filter(item => (item.id > offset - this.state.perPage) && (item.id <= offset))
            .map(item => (
              <div key={item.id}>
                {item.title}
              </div>
            ))
        }
        <p>Active: {activePage}</p>
        <ReactPaginate
          previousLabel={<Arrow revers />}
          nextLabel={<Arrow />}

          marginPagesDisplayed={1}
          pageRangeDisplayed={4}

          pageCount={this.state.pageCount}
          onPageChange={this.handlePageClick}

          pageClassName={styles.list}
          pageLinkClassName={styles.item}
          activeLinkClassName={styles.active}
          containerClassName={styles.container}
        />
      </div>
    )
  }
}

export default  CSSModules(Paginate, styles)
