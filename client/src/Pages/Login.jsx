import { useRegisterUserMutation } from "@/app/api/authApi";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2 } from "lucide-react";
import { useState } from "react";


export function Login() {

  const [signupInput, setsignupInput] = useState({
    name: "",
    email: "",
    password:"",
  })
  const [loginInput, setloginInput] = useState({ email: "", password: "" })
  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setsignupInput({...signupInput, [name]:value})
    } else {
      setloginInput({...loginInput, [name]:value})
    }

  }
  // const handleRegistration = async (type) => {
  //   const inputData = type === "signup" ? signupInput : loginInput;
  // console.log(inputData)
  // }
  
  // call mutation Auth Api
  const [registerUser,
    // or bhi recieve kr sakate hai
    {
      data: registerData,
      error: registerError,
      isLoading: registerIsLoading,
      isSuccess: loginSuccess,
    },
  ] = useRegisterUserMutation() ;
  const handleRegistration = async (type) => {
    const inputData = type === "signup"? signupInput: loginInput;
    // action use mutation
    const action = type === "signup" ? registerUser : null;
    await action(inputData)
    console.log(inputData)
  }
    return (
      
      <>
        <div className="flex items-center w-full justify-center mt-20">
          <Tabs defaultValue="login" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="Signup">Sign up</TabsTrigger>
              <TabsTrigger value="login">Login</TabsTrigger>
            </TabsList>
            <TabsContent value="Signup">
              <Card>
                <CardHeader>
                  <CardTitle>Sign up</CardTitle>
                  <CardDescription>
                    Make changes to your Sign up here. Click save when you're
                    done.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      defaultValue="Pedro Duarte"
                      value={signupInput.name}
                      onChange={(e) => changeInputHandler(e, "signup")}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="username">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      defaultValue="sorav@peduarte"
                      value={signupInput.email}
                      onChange={(e) => changeInputHandler(e, "signup")}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="Password">Password</Label>
                    <Input
                      type="password"
                      id="password"
                      name="password"
                      defaultValue="password"
                      value={signupInput.password}
                      onChange={(e) => changeInputHandler(e, "signup")}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => handleRegistration("signup")}>
                    signup
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle>Login</CardTitle>
                  <CardDescription>
                    Login your password here. After signup, you'll be logged in.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      defaultValue="sorav@peduarte"
                      value={loginInput.email}
                      onChange={(e)=> changeInputHandler(e,"login")}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      type="password"
                      id="password"
                      name="password"
                      defaultValue="password"
                      value={loginInput.password}
                      onChange={(e) => changeInputHandler(e,"login")}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => handleRegistration("login")}>
                    Login
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </>
    );
            
}
