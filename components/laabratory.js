const aaClasses = "dark:text-blue-300 text-blue-900 dark:bg-transparent";
const aaWebsite = "https://aadalal.github.io";
const brClasses = "dark:text-red-300 text-red-900 dark:bg-transparent";
const brWebsite = "https://brianwilliams.xyz";

const Laabratory = ({ link = true }) => {
  return (
    <div className="dark:bg-transparent">
      l
      {link ? (
        <a className={aaClasses + " hover:underline"} href={aaWebsite}>
          aa
        </a>
      ) : (
        <span className={aaClasses}>aa</span>
      )}
      {link ? (
        <a
          className={brClasses + " hover:underline"}
          href="https://brianwilliams.tech"
        >
          br
        </a>
      ) : (
        <span className={brClasses}>br</span>
      )}
      atory
    </div>
  );
};

export default Laabratory;
