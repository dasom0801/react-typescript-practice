import * as React from 'react';

interface MyClassProps {
  firstName: string;
  lastName: string;
}

const MyClass: React.SFC<MyClassProps> = ({firstName, lastName}) => {
  return (
    <div>
      <p>{firstName} {lastName} </p>
    </div>
  );
}

export default MyClass;
