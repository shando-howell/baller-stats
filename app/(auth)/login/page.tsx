import ContinueWithGoogleButton from "@/app/components/continue-with-google-button/ContinueWithGoogleButton"
import { 
  Card,
  CardHeader,
  CardTitle,
  CardContent 
} from "@/components/ui/card"

const LoginPage = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ContinueWithGoogleButton />
        </CardContent>
      </Card>
    </>
  )
}

export default LoginPage