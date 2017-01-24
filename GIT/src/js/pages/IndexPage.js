import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { Authenticated, NotAuthenticated, LoginLink } from 'react-stormpath';

// export default class IndexPage extends React.Component {
//   static contextTypes = {
//     user: React.PropTypes.object
//   };

  class DisplayAnImage extends Component {
  render() {
    return (
      <View>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        />
      </View>
    );
  }
}

// App registration and rendering
AppRegistry.registerComponent('DisplayAnImage', () => DisplayAnImage);

//   let imgUrl = 'Images/LoginBackground.jpg'
// let styles = {
// root: {

//     background: 'url('+ imgUrl + ') noRepeat center center fixed',
//     backgroundSize: 'cover',
// }

//   render() {
//     return (
//       <div className="container">
//         <h2 className="text-center">
//           Welcome
//           { this.context.user ? ' ' + this.context.user.givenName : null }!
//         </h2>
//         <hr />
//         <div className="jumbotron">
//           <ol className="lead">
//             <NotAuthenticated>
//               <li><Link to="/register">Registration</Link></li>
//               <li><LoginLink /></li>
//               <li><Link to="/forgot">Forgot Password</Link></li>
//             </NotAuthenticated>
//             <li><Link to="/profile">Custom Profile Data</Link></li>
//           </ol>
//         </div>
//       </div>
//     );
//   }
// }
