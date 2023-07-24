import Link from "next/link";
import { Fragment, useState } from "react";
const Timeline = () => {
  const [active, setActive] = useState(1);
  const [activeTimeline, setActiveTimeline] = useState(1);
  const onClick = (value) => {
    setActive(value);
  };
  const activeClass = (value) =>
    value === active ? "active" : value > active ? "next" : "previous";
  const filter = (value) => (100 / active) * value;
  return (
    <Fragment>
      {/* Main Title */}
      <div className="neoh_fn_title">
        <h3 className="fn_title">xRonin Roadmap</h3>
        <div className="line">
          <span />
        </div>
      </div>
      {/* !Main Title */}
      {/* Timeline */}
      <div className="neoh_fn_timeline">
        {/* Timeline Content */}
        <div className="timeline_content">
          <ul className="timeline_list">
            <li className={`timeline_item ${activeClass(1)}`} data-index={1}>
              <div className="t_item">
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2">
                        <img src="img/timeline/1/1.png" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/1/2.png" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/1/3.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                    <span>Q1, 2023</span>
                  </p>
                  <h3 className="fn_title">Multichain</h3>
                  <p className="fn_desc">
                    We absolutely believe Multichain is the future. NEAR
                    Foundation and TerraFormLabs are the OFFICIAL PARTNER &
                    BACKER of Web3Mon. All Universes will be aggregated in our
                    Web3Mon.
                  </p>
                  <p className="fn_read">
                    <a
                      href="https://twitter.com/web3mon"
                      target="_blank"
                      rel="noreferrer"
                      className="neoh_fn_button only_text"
                    >
                      <span className="text">Read More</span>
                    </a>
                  </p>
                </div>
              </div>
            </li>
            <li className={`timeline_item ${activeClass(2)}`} data-index={2}>
              <div className="t_item">
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2">
                        <img src="img/timeline/3/1.png" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/3/2.png" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/3/3.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                    <span>Q1, 2023</span>
                  </p>
                  <h3 className="fn_title">First NFT collection launch</h3>
                  <p className="fn_desc">
                    The First Web3Mon NFT will be game skin that can be used in
                    the game. Users can customize their character through our
                    NFT.
                  </p>
                  <p className="fn_read">
                    <a
                      href="https://docs.web3mon.io/web3mon-nft/skin-clothes-nft"
                      target="_blank"
                      rel="noreferrer"
                      className="neoh_fn_button only_text"
                    >
                      <span className="text">Read More</span>
                    </a>
                  </p>
                </div>
              </div>
            </li>
            <li className={`timeline_item ${activeClass(3)}`} data-index={3}>
              <div className="t_item">
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2">
                        <img src="img/timeline/2/1.png" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/2/2.png" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/2/3.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                    <span>Q1, 2023</span>
                  </p>
                  <h3 className="fn_title">First Game Launch</h3>
                  <p className="fn_desc">
                    PVP Turnbased Combat Game Style first game launch.
                    Compete with other NFT collections on the Web3Mon
                    MULTIVERSE.
                  </p>
                  <p className="fn_read">
                    <a
                      href="https://demo.web3mon.io/"
                      target="_blank"
                      rel="noreferrer"
                      className="neoh_fn_button only_text"
                    >
                      <span className="text">Play Now</span>
                    </a>
                  </p>
                </div>
              </div>
            </li>
            <li className={`timeline_item ${activeClass(4)}`} data-index={4}>
              <div className="t_item">
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2">
                        <img src="img/timeline/4/1.png" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/4/2.png" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/4/3.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                    <span>Q2, 2023</span>
                  </p>
                  <h3 className="fn_title">Second MiniGame Launch : Betting</h3>
                  <p className="fn_desc">
                    In a battle between two players, users place their token
                    bets on the side they think will win. After the game, the
                    winner side takes all the money from the loser side. Winning
                    player is paid 5 percent of the total revenue. The remaining
                    95 percent will be divided according to the principal ratio
                    bet by the winner side.
                  </p>
                  <p className="fn_read">
                    <a className="neoh_fn_button only_text">
                      <span className="text">Coming Soon</span>
                    </a>
                  </p>
                </div>
              </div>
            </li>
            <li className={`timeline_item ${activeClass(5)}`} data-index={5}>
              <div className="t_item">
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2">
                        <img src="img/timeline/5/1.png" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/5/2.webp" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/5/3.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                    <span>Q4, 2023</span>
                  </p>
                  <h3 className="fn_title">{"'Create to Earn'"} DAO launch</h3>
                  <p className="fn_desc">
                    We believe in the powerful power of DAO and IP. Using the
                    {"'hive mind'"} of a DAO, the Members will collectively vote
                    and deploy game structures in Web3Mon that aim to be the
                    next Mass Adoption. The Web3Mon will be a true MULTIVERSE
                    where all the IP comes together.
                  </p>
                  <p className="fn_read">
                    <a className="neoh_fn_button only_text">
                      <span className="text">Coming Soon</span>
                    </a>
                  </p>
                </div>
              </div>
            </li>
            {/* <li className={`timeline_item ${activeClass(6)}`} data-index={6}>
              <div className="t_item">
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2">
                        <img src="img/timeline/6/1.jpg" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/6/2.jpg" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/6/3.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                    <span>June 23, 2022</span>
                  </p>
                  <h3 className="fn_title">
                    <Link href="/roadmap-single">
                      New Haircut Collection #01 is Coming Up
                    </Link>
                  </h3>
                  <p className="fn_desc">
                    Morbi non dignissim erat, a blandit felis. Suspendisse nec
                    lorem vel orci varius congue ut vitae est. Nam quis tempus
                    nisl. Fusce posuere nibh a mi molestie, sit amet ornare
                    lectus interdum.
                  </p>
                  <p className="fn_read">
                    <Link href="/roadmap-single">
                      <a className="neoh_fn_button only_text">
                        <span className="text">Read More</span>
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </li>
            <li className={`timeline_item ${activeClass(7)}`} data-index={7}>
              <div className="t_item">
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2">
                        <img src="img/timeline/7/1.jpg" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/7/2.jpg" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/7/3.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                    <span>July 01, 2022</span>
                  </p>
                  <h3 className="fn_title">
                    <Link href="/roadmap-single">
                      New Haircut Collection #02 is Coming Up
                    </Link>
                  </h3>
                  <p className="fn_desc">
                    Morbi non dignissim erat, a blandit felis. Suspendisse nec
                    lorem vel orci varius congue ut vitae est. Nam quis tempus
                    nisl. Fusce posuere nibh a mi molestie, sit amet ornare
                    lectus interdum.
                  </p>
                  <p className="fn_read">
                    <Link href="/roadmap-single">
                      <a className="neoh_fn_button only_text">
                        <span className="text">Read More</span>
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </li> */}
          </ul>
        </div>
        {/* !Timeline Content */}
        {/* Timeline Progress */}
        <div className="timeline_progress">
          {/* Nav */}
          <a
            className="nav_prev c-pointer"
            onClick={() =>
              setActiveTimeline(
                activeTimeline == 1 ? activeTimeline : activeTimeline - 1
              )
            }
          >
            <img src="svg/right-arr.svg" alt="" className="fn__svg" />
          </a>
          <a
            onClick={() =>
              setActiveTimeline(
                activeTimeline == 4 ? activeTimeline : activeTimeline + 1
              )
            }
            className="nav_next c-pointer"
          >
            <img src="svg/right-arr.svg" alt="" className="fn__svg" />
          </a>
          {/* !Nav */}
          <div className="progress_line_wrapper">
            <div
              className="progress_line"
              style={{
                width: "1200px",
                transform: `translateX(-${
                  (100 / activeTimeline) * (activeTimeline - 1)
                }%)`,
              }}
            >
              <ul>
                <li className={activeClass(1)}>
                  <a onClick={() => onClick(1)}>
                    <span className="text">Q1, 2023</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(1)}%)` }}
                    />
                  </a>
                </li>
                <li className={activeClass(2)}>
                  <a onClick={() => onClick(2)}>
                    <span className="text">Q1, 2023</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(2)}%)` }}
                    />
                  </a>
                </li>
                <li className={activeClass(3)}>
                  <a onClick={() => onClick(3)}>
                    <span className="text">Q1, 2023</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(3)}%)` }}
                    />
                  </a>
                </li>
                <li className={activeClass(4)}>
                  <a onClick={() => onClick(4)}>
                    <span className="text">Q2, 2023</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(4)}%)` }}
                    />
                  </a>
                </li>
                <li className={activeClass(5)}>
                  <a onClick={() => onClick(5)}>
                    <span className="text">Q4, 2023</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(5)}%)` }}
                    />
                  </a>
                </li>
                {/* <li className={activeClass(6)}>
                  <a onClick={() => onClick(6)}>
                    <span className="text">June 23, 2022</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(6)}%)` }}
                    />
                  </a>
                </li>
                <li className={activeClass(7)}>
                  <a onClick={() => onClick(7)}>
                    <span className="text">July 01, 2022</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(7)}%)` }}
                    />
                  </a>
                </li> */}
              </ul>
              <span className="active_line" />
            </div>
          </div>
        </div>
        {/* !Timeline Progress */}
      </div>
      {/* !Timeline */}
    </Fragment>
  );
};
export default Timeline;
