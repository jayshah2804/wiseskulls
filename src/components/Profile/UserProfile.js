import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';

const UserProfile = () => {
  return (
    <section className={classes.profile}>
      <h2>Your User Data</h2>
      <ProfileForm />
    </section>
  );
};

export default UserProfile;
