'use strict';

import React from 'react';
import Cell from './Cell';

export default class Row extends React.Component {
  render () {
    return(
      <tr className='row' row={this.props.row} onChange={this.props.onChange} onFocus={this.props.onFocus}> 
        {this.props.row.map((cell,index) => 
          <Cell cell={cell} onChange={this.props.onChange.bind(null, index)} onFocus={this.props.onFocus.bind(null, index)} key={index} />
        )}
      </tr>
    )
  }
}