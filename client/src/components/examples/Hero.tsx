import Hero from '../Hero';

export default function HeroExample() {
  return (
    <Hero
      onLoginClick={() => console.log('Login clicked')}
      onSignupClick={() => console.log('Signup clicked')}
    />
  );
}
