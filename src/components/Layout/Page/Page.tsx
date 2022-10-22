import classes from './Page.module.scss';
import Sidebar from '../Sidebar';

export default function Page({ children }: any) {
  return (
    <div>
      <Sidebar />
      <div className={classes.mainContainer}>{children}</div>
    </div>
  );
}
