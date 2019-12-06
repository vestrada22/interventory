import * as React from 'react';
import { Appbar } from 'react-native-paper';

export default class Header extends React.Component {
  _goBack = () => console.log('Went back');

  _openDrawer = () => console.log('Menu')

  _handleSearch = () => console.log('Searching');

  _handleMore = () => console.log('Shown more');

  render() {
    return (
      <Appbar.Header>
        <Appbar.BackAction
          onPress={this._goBack}
        />
        <Appbar.Content
          title={this.props.title}
        />
        <Appbar.Action icon="hamburger-menu" onPress={this._openDrawer} />
        <Appbar.Action icon="search" onPress={this._handleSearch} />
        <Appbar.Action icon="more-vert" onPress={this._handleMore} />
      </Appbar.Header>
    );
  }
}