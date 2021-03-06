import React from 'react'
import { useRoute } from '@react-navigation/native'
import ProfileRenderer from '../../../components/Profile/ProfileRenderer.component'

const UserResultProfileScreen: React.FC = () => {
  const { params } = useRoute()

  return <ProfileRenderer user={null} fetchUserUrl={params['profileUrl']} />
}

export default UserResultProfileScreen
