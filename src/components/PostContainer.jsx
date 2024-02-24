import styles from "../styles/PostContainer.module.css";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import user4 from "../assets/user4.png";
import group1 from "../assets/group1.png";
import group2 from "../assets/group2.png";
import group3 from "../assets/group3.png";
import group4 from "../assets/group4.png";

const PostContainer = () => {
  const dropdownList = ["Edit", "Report", "Option 3"];

  const postContent = [
    {
      title: "✍️ Article",
      pic: image1,
      heading: "What if famous brands had regular fonts? Meet RegulaBrands!",
      content:
        "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      userpic: user1,
      username: "Sarthak Kamra",
    },
    {
      title: "🔬️ Education",
      pic: image2,
      heading:
        "Tax Benefits for Investment under National Pension Scheme launched by Government",
      content:
        "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      userpic: user2,
      username: "Sarah West",
    },
    {
      title: "🗓️ Meetup",
      pic: image3,
      heading: "Finance & Investment Elite Social Mixer @Lujiazui",
      content:
        "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      userpic: user3,
      username: "Ronal Jones",
    },
    {
      title: "💼️ Job",
      pic: image2,
      heading: "Software Developer",
      content:
        "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      userpic: user4,
      username: "Joseph Gray",
    },
  ];

  const groupContainer = [
    {
      name: "Leisure",
      pic: group1,
    },
    {
      name: "Activism",
      pic: group2,
    },
    {
      name: "MBA",
      pic: group3,
    },
    {
      name: "Philosphy",
      pic: group4,
    },
  ];

  return (
    <div
      className={`mx-auto d-flex gap-5 justify-content-center ${styles.postContainer}`}
    >
      <div className="posts-center position-relative">
        <main className="d-flex flex-column gap-4">
          {postContent.map((item) => (
            <div
              className={`d-flex flex-column border boreder-1 rounded-2 ${styles.postContent}`}
            >
              {item.title !== "💼️ Job" ? (
                <img src={item.pic} alt="image" className={styles.postImg} />
              ) : null}
              <div className="p-4">
                <h3 className="d-flex">{item.title}</h3>
                <div className="d-flex gap-6 justify-content-between">
                  <h4>{item.heading}</h4>
                  <div className="btn align-self-start">
                    <div className="dropdown">
                      <div
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-more_vert-24px'%3e%3cpath%20id='Vector'%20d='M18.6667%2014C18.6667%2015.2833%2019.7167%2016.3333%2021%2016.3333C22.2833%2016.3333%2023.3333%2015.2833%2023.3333%2014C23.3333%2012.7166%2022.2833%2011.6666%2021%2011.6666C19.7167%2011.6666%2018.6667%2012.7166%2018.6667%2014ZM16.3333%2014C16.3333%2012.7166%2015.2833%2011.6666%2014%2011.6666C12.7167%2011.6666%2011.6667%2012.7166%2011.6667%2014C11.6667%2015.2833%2012.7167%2016.3333%2014%2016.3333C15.2833%2016.3333%2016.3333%2015.2833%2016.3333%2014ZM9.33333%2014C9.33333%2012.7166%208.28333%2011.6666%207%2011.6666C5.71666%2011.6666%204.66666%2012.7166%204.66666%2014C4.66666%2015.2833%205.71666%2016.3333%207%2016.3333C8.28333%2016.3333%209.33333%2015.2833%209.33333%2014Z'%20fill='black'/%3e%3c/g%3e%3c/svg%3e"
                          alt="3dots"
                          height="28px"
                          width="28px"
                        />
                        <ul className="dropdown-menu">
                          {dropdownList.map((listItem) => (
                            <li>
                              <button className="dropdown-item" type="button">
                                {listItem}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="d-flex align-items-center gap-5 list-unstyled"></ul>
                <p>{item.content}</p>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src={item.userpic}
                      alt="Profile"
                      className="rounded-circle"
                    />
                    <div className="d-flex flex-column">
                      <div className="text-wrapper">{item.username}</div>
                      <div class="d-lg-none">
                        <img
                          src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='icon/action/visibility_24px'%3e%3cpath%20id='icon/action/visibility_24px_2'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0.75%209C2.0475%205.7075%205.25%203.375%209%203.375C12.75%203.375%2015.9525%205.7075%2017.25%209C15.9525%2012.2925%2012.75%2014.625%209%2014.625C5.25%2014.625%202.0475%2012.2925%200.75%209ZM15.615%209C14.3775%206.4725%2011.8425%204.875%209%204.875C6.1575%204.875%203.6225%206.4725%202.385%209C3.6225%2011.5275%206.1575%2013.125%209%2013.125C11.8425%2013.125%2014.3775%2011.5275%2015.615%209ZM9%207.125C10.035%207.125%2010.875%207.965%2010.875%209C10.875%2010.035%2010.035%2010.875%209%2010.875C7.965%2010.875%207.125%2010.035%207.125%209C7.125%207.965%207.965%207.125%209%207.125ZM5.625%209C5.625%207.14%207.14%205.625%209%205.625C10.86%205.625%2012.375%207.14%2012.375%209C12.375%2010.86%2010.86%2012.375%209%2012.375C7.14%2012.375%205.625%2010.86%205.625%209Z'%20fill='%23525252'/%3e%3c/g%3e%3c/svg%3e"
                          alt="watch"
                        />
                        <span>1.4k views</span>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-none d-lg-block pe-4">
                      <img
                        src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='icon/action/visibility_24px'%3e%3cpath%20id='icon/action/visibility_24px_2'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0.75%209C2.0475%205.7075%205.25%203.375%209%203.375C12.75%203.375%2015.9525%205.7075%2017.25%209C15.9525%2012.2925%2012.75%2014.625%209%2014.625C5.25%2014.625%202.0475%2012.2925%200.75%209ZM15.615%209C14.3775%206.4725%2011.8425%204.875%209%204.875C6.1575%204.875%203.6225%206.4725%202.385%209C3.6225%2011.5275%206.1575%2013.125%209%2013.125C11.8425%2013.125%2014.3775%2011.5275%2015.615%209ZM9%207.125C10.035%207.125%2010.875%207.965%2010.875%209C10.875%2010.035%2010.035%2010.875%209%2010.875C7.965%2010.875%207.125%2010.035%207.125%209C7.125%207.965%207.965%207.125%209%207.125ZM5.625%209C5.625%207.14%207.14%205.625%209%205.625C10.86%205.625%2012.375%207.14%2012.375%209C12.375%2010.86%2010.86%2012.375%209%2012.375C7.14%2012.375%205.625%2010.86%205.625%209Z'%20fill='%23525252'/%3e%3c/g%3e%3c/svg%3e"
                        alt="watch"
                      ></img>
                      <span>1.4k views</span>
                    </div>

                    <button className="btn d-flex align-items-center gap-2">
                      <img
                        src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-share-24px'%20clip-path='url(%23clip0_1_1104)'%3e%3cpath%20id='Vector'%20d='M13.5%2012.06C12.93%2012.06%2012.42%2012.285%2012.03%2012.6375L6.6825%209.525C6.72%209.3525%206.75%209.18%206.75%209C6.75%208.82%206.72%208.6475%206.6825%208.475L11.97%205.3925C12.375%205.7675%2012.9075%206%2013.5%206C14.745%206%2015.75%204.995%2015.75%203.75C15.75%202.505%2014.745%201.5%2013.5%201.5C12.255%201.5%2011.25%202.505%2011.25%203.75C11.25%203.93%2011.28%204.1025%2011.3175%204.275L6.03%207.3575C5.625%206.9825%205.0925%206.75%204.5%206.75C3.255%206.75%202.25%207.755%202.25%209C2.25%2010.245%203.255%2011.25%204.5%2011.25C5.0925%2011.25%205.625%2011.0175%206.03%2010.6425L11.37%2013.7625C11.3325%2013.92%2011.31%2014.085%2011.31%2014.25C11.31%2015.4575%2012.2925%2016.44%2013.5%2016.44C14.7075%2016.44%2015.69%2015.4575%2015.69%2014.25C15.69%2013.0425%2014.7075%2012.06%2013.5%2012.06Z'%20fill='%232D2D2D'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1104'%3e%3crect%20width='18'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                        alt="shareBtn"
                      />
                      <span className="d-lg-none">Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>

      <div className="container d-none d-lg-flex flex-column mt-4">
        <div className="d-flex justify-content-between">
          <div class="d-flex align-items-center">
            <img
              src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='outline-location_on-24px%202'%20clip-path='url(%23clip0_1_1233)'%3e%3cpath%20id='Vector'%20d='M9%201.5C6.0975%201.5%203.75%203.8475%203.75%206.75C3.75%2010.6875%209%2016.5%209%2016.5C9%2016.5%2014.25%2010.6875%2014.25%206.75C14.25%203.8475%2011.9025%201.5%209%201.5ZM5.25%206.75C5.25%204.68%206.93%203%209%203C11.07%203%2012.75%204.68%2012.75%206.75C12.75%208.91%2010.59%2012.1425%209%2014.16C7.44%2012.1575%205.25%208.8875%205.25%206.75Z'%20fill='black'/%3e%3cpath%20id='Vector_2'%20d='M9%208.625C10.0355%208.625%2010.875%207.78553%2010.875%206.75C10.875%205.71447%2010.0355%204.875%209%204.875C7.96447%204.875%207.125%205.71447%207.125%206.75C7.125%207.78553%207.96447%208.625%209%208.625Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1233'%3e%3crect%20width='18'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
              alt="location"
            />
            <input
              type="text"
              placeholder="Enter Your Location"
              class="input-text"
            />
          </div>

          <button class="btn">
            <img
              src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-edit-24px'%20clip-path='url(%23clip0_1_848)'%3e%3cpath%20id='Vector'%20d='M2.5%2014.375V17.5H5.625L14.8417%208.28334L11.7167%205.15834L2.5%2014.375ZM17.2583%205.86667C17.5833%205.54167%2017.5833%205.01667%2017.2583%204.69167L15.3083%202.74167C14.9833%202.41667%2014.4583%202.41667%2014.1333%202.74167L12.6083%204.26667L15.7333%207.39167L17.2583%205.86667Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_848'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
              alt="edit"
            />
          </button>
        </div>

        <hr class="my-1"></hr>

        <div class="d-flex align-items-center gap-2 mb-4">
          <img
            src="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-error_outline-24px'%20opacity='0.5'%20clip-path='url(%23clip0_1_1239)'%3e%3cpath%20id='Vector'%20d='M7.33333%209.99998H8.66667V11.3333H7.33333V9.99998ZM7.33333%204.66665H8.66667V8.66665H7.33333V4.66665ZM7.99333%201.33331C4.31333%201.33331%201.33333%204.31998%201.33333%207.99998C1.33333%2011.68%204.31333%2014.6666%207.99333%2014.6666C11.68%2014.6666%2014.6667%2011.68%2014.6667%207.99998C14.6667%204.31998%2011.68%201.33331%207.99333%201.33331ZM8%2013.3333C5.05333%2013.3333%202.66667%2010.9466%202.66667%207.99998C2.66667%205.05331%205.05333%202.66665%208%202.66665C10.9467%202.66665%2013.3333%205.05331%2013.3333%207.99998C13.3333%2010.9466%2010.9467%2013.3333%208%2013.3333Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1239'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
            alt="information"
            class="align-self-start"
          />
          <p class="location-info">
            Your location will help us serve better and extend a personalised
            experience.
          </p>
        </div>

        <div class="d-flex align-items-center gap-2 text-capitalize mb-3">
          <img
            src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='twotone-thumb_up-24px'%20clip-path='url(%23clip0_1_1263)'%3e%3cpath%20id='Vector'%20opacity='0.3'%20d='M15.75%209V7.5H9L10.005%203.495L6.75%206.75V14.25H13.5L15.75%209Z'%20fill='black'/%3e%3cpath%20id='Vector_2'%20d='M6.75%2015.75H13.5C14.1225%2015.75%2014.655%2015.375%2014.88%2014.835L17.145%209.5475C17.2125%209.375%2017.25%209.195%2017.25%209V7.5C17.25%206.675%2016.575%206%2015.75%206H11.0175L11.73%202.5725L11.7525%202.3325C11.7525%202.025%2011.625%201.74%2011.4225%201.5375L10.6275%200.75L5.685%205.6925C5.415%205.9625%205.25%206.3375%205.25%206.75V14.25C5.25%2015.075%205.925%2015.75%206.75%2015.75ZM6.75%206.75L10.005%203.495L9%207.5H15.75V9L13.5%2014.25H6.75V6.75ZM0.75%206.75H3.75V15.75H0.75V6.75Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1263'%3e%3crect%20width='18'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
            alt="thumbs up"
          />
          <span class="text-recommended">REcommended Groups</span>
        </div>

        <div class="d-flex flex-column gap-4">
          {groupContainer.map((item) => (
            <div class="d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center gap-2">
                <img
                  class="rounded-circle"
                  alt="Profile"
                  src={item.pic}
                  width="36"
                  height="36"
                />
                <div class="text-wrapper">{item.name}</div>
              </div>
              <a class="btn follow rounded-5" href="/">
                Follow
              </a>
            </div>
          ))}

          <button class="btn text-end mt-5 text-primary text-capitalize">
            see more...
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostContainer;
