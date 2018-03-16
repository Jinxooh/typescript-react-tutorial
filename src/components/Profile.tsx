import * as React from 'react';

interface Props {
  name: string;
  job: string;
}

const Profile: React.SFC<Props> = ({name, job}) => {
  return (
    <div>
        <h1>Profile</h1>
        <div>
          <b>name:</b>
          {name}
        </div>
        <div>
          <b>job:</b>
          {job}
        </div>
      </div>
  );
};

export default Profile;