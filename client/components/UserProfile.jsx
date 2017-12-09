import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const UserProfile = (props) => {
  const { user } = props;
  return (
    <div className='userProfile' style={{textAlign:'center'}}>
      <Card>
        <CardHeader
          title={user.firstName + ' ' + user.lastName}
          subtitle={user.email}
        />
        <CardMedia overlay={<CardTitle title='' subtitle='' />}>
          <img src={user.pic.length !== 0 ? user.pic : 'http://www.clker.com/cliparts/d/L/P/X/z/i/no-image-icon-md.png'} alt='' />
        </CardMedia>
        <CardText>
          {user.username} <br/>
          {user.gender} <br/>
          {user.genderPreference} <br/>
          {user.age} <br/>
          {user.phone} <br/>
        </CardText>
      </Card>
      <FlatButton
        label="Logout"
        // onClick={}
      />
    </div>
  );
};

export default UserProfile;
