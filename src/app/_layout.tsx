import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import InitialLayout from '../../components/initalLayout';
import ClerkConvexProvider from '../../providers/ClerkConvexProvider';

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

export default function RootLayout() {
  return (
    <ClerkConvexProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{flex:1 , backgroundColor:"black"}}>
          <InitialLayout />
        </SafeAreaView>
      </SafeAreaProvider>
    </ClerkConvexProvider>
  );
}
