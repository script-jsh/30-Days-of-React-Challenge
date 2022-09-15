import joshuaImage from './joshua.jpg'

// User Card Component
const UserCard = ({ user: { image } }) => (
    <div className='user-card'>
      <img src={joshuaImage} />
      {/* <h2>
        {firstName}
        {lastName}
      </h2> */}
    </div>
  )

export default UserCard