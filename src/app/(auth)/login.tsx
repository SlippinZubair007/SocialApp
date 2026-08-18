import { useSSO } from '@clerk/expo'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../../../constants/theme'
import { styles } from '../../../styles/auth.styles'




const login = () => {

    const {startSSOFlow}=useSSO()
    const router=useRouter()

    const googleSignIn=async()=>{
    try {
      const {createdSessionId,setActive}=await startSSOFlow({strategy:'oauth_google'})
      
      if (setActive && createdSessionId) {
        setActive({session:createdSessionId})
        router.replace('/(tabs)')
      }
    }
    catch (error) {
      console.log('Error during Google sign-in:', error)
    }
  }

  return (
    <View style={styles.container}>

    <View style={styles.brandSection}>
      <View style={styles.logoContainer}>
        <Ionicons name="earth-outline" size={32} color="orange" />
      </View>
      <Text style={styles.appName}>Konnect</Text>
      <Text style={styles.tagline}>Connect with friends and family</Text>
    </View>


    <View style={styles.illustrationContainer}>
      <Image
        source={require('../../../assets/images/1.png')}
        style={styles.illustration}
        resizeMode="cover"
      />
    </View>
    

    <View style={styles.loginSection}>
      <TouchableOpacity
        style={styles.googleButton}
        onPress={googleSignIn}
        activeOpacity={0.9}
        >
          <View style={styles.googleIconContainer}>
            <Ionicons name="logo-google" size={24} color={COLORS.surface} />
          </View>
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>

    </View>
   
   </View>
   
  
  )
}

export default login