import { AnimationRevealPage } from "helpers";
import LoginIcon from "feather-icons/dist/icons/log-in.svg";
import Image from "next/image";
import Link from "next/link";
import twitter from '../../public/images/twitter-icon.png'
import google from '../../public/images/google-icon.png'


const Container = `relative min-h-screen bg-primary-900 text-white font-medium flex justify-center`;
const Content = `max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = `lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = ``;
const LogoImage = `h-12 mx-auto`;
const MainContent = `mt-12 flex flex-col items-center`;
const Heading = `text-2xl xl:text-3xl font-extrabold`;
const FormContainer = `w-full flex-1 mt-8`;

const SocialButtonsContainer = `flex flex-col items-center`;
const SocialButton = `w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`;

const DividerTextContainer = `my-12 border-b text-center relative`;
const DividerText = `leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

const Form = `mx-auto max-w-xs`;
const Input = `w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = `mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`;
const IllustrationContainer = `sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = `m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`;

const SignIn = ({
  logoLinkUrl = "#",
  illustrationImageSrc = "images/login-illustration.svg",
  headingText = "Sign In To Treact",
  socialButtons = [
    {
      iconImageSrc: google,
      text: "Sign In With Google",
      url: "https://google.com",
    },
    {
      iconImageSrc: twitter,
      text: "Sign In With Twitter",
      url: "https://twitter.com",
    },
  ],
  submitButtonText = "Sign In",
  SubmitButtonIcon = LoginIcon,
  forgotPasswordUrl = "#",
  signupUrl = "#",
}: any) => {
  return (
    <div className="-mx-16 -my-8">
    <AnimationRevealPage className='pb-0'>
      <div className={Container}>
        <div className={Content}>
          <div className={MainContainer}>
            <a className={LogoLink} href={logoLinkUrl}>
              <img className={LogoImage} alt="" src={"images/logo.svg"} />
            </a>
            <div className={MainContent}>
              <h1 className={Heading}>{headingText}</h1>
              <div className={FormContainer}>
                <div className={SocialButtonsContainer}>
                  {socialButtons.map((socialButton: any) => (
                    <a
                      className={SocialButton}
                      key={socialButton.url}
                      href={socialButton.url}
                    >
                      <span className="bg-white p-2 rounded-full">
                        <Image
                          src={socialButton.iconImageSrc}
                          className="w-4"
                          alt=""
                          width={10}
                          height={10}
                        />
                      </span>
                      <span className="ml-4">{socialButton.text}</span>
                    </a>
                  ))}
                </div>
                <div className={DividerTextContainer}>
                  <div className={DividerText}>Or Sign in with your e-mail</div>
                </div>
                <form className={Form}>
                  <input className={Input} type="email" placeholder="Email" />
                  <input
                    className={Input}
                    type="password"
                    placeholder="Password"
                  />
                  <button className={SubmitButton} type="button">
                    <SubmitButtonIcon className="w-6 h-6 -ml-2" />
                    <span className="ml-3">{submitButtonText}</span>
                  </button>
                </form>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  <Link href={forgotPasswordUrl}
                  className="cursor-pointer border-b border-gray-500 border-dotted">
                      Forgot Password ?
                  </Link>
                </p>
                <p className="mt-8 text-sm text-gray-600 text-center">
                  Dont have an account?{" "}
                  <Link href={signupUrl}
                      className="cursor-pointer border-b border-gray-500 border-dotted"
                      >
                      Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className={IllustrationContainer}>
            <div
              className={IllustrationImage}
              style={{ backgroundImage: `url(${illustrationImageSrc})`}}
            />
          </div>
        </div>
      </div>
    </AnimationRevealPage>
    </div>
  );
};

export default SignIn;
