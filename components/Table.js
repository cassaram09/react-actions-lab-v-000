'use strict';

import React from 'react';
import Row from './Row';

export default class Table extends React.Component {
  render () {
    return(
      <table className='table' table={this.props.table} onBlur={this.props.onBlur} onFocus={this.props.onFocus} onChange={this.props.onChange} >
        <tbody>
          {this.props.table.map((row,index) => 
            <Row row={row} onChange={this.props.onChange.bind(null, index)} onFocus={this.props.onFocus.bind(null, index)} key={index} />
          )}
        </tbody> 
      </table>
    )
  }
}
