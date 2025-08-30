import styles from "./home.module.css";
import NewsFeed from "@/components/NewsFeed/NewsFeed";

export default function Home() {
  return (
    <div className={styles.home}>
      <NewsFeed
        title="Axemen Edge Gulls, Claim Title"
        date="Sunday, March 23, 2025"
        images={[
          "newsfeed/2025-03-23/image1.jpeg",
          "newsfeed/2025-03-23/image2.jpeg",
          "newsfeed/2025-03-23/image3.jpeg",
          "newsfeed/2025-03-23/image4.jpeg",
          "newsfeed/2025-03-23/image5.jpeg",
          "newsfeed/2025-03-23/image6.jpeg",
          "newsfeed/2025-03-23/image7.jpeg",
          "newsfeed/2025-03-23/image8.jpeg",
          "newsfeed/2025-03-23/image9.jpeg",
          "newsfeed/2025-03-23/image10.jpeg",
          "newsfeed/2025-03-23/2025-playoff-bracket-f.jpg",
        ]}
        imageSize="large"
        textBody={`Our champion has been decided. In a game between two CMHL giants, the (3) Axemen overcame years of adversity, avenged last year’s loss, and claimed their first title by beating the (1) Gulls 3-2 on Friday night.\n\nFans who were late for the game missed an exciting start as the Gulls’ Jaret Chipman got the action started by burying the opening goal just 49 seconds into the game. The lead was short lived however as Josh Soares’ rip at 1:51 of the first quickly matched the score for the Axemen. Scoring in the first wasn’t done, however, as the Gulls answered right back at 6:35 as Chipman put away his second of the game to reclaim the Gulls’ lead. It would be the last time the Gulls ever saw the lead as just over two minutes later Matthew Thorpe responded to tie the game back up for the Axemen at 8:28.\n\nWith a 2-2 tie heading into the second, at 5:58 from just outside the blue paint, CMHL Championship Game MVP Jacob Saddler tucked away the decisive goal as the Axemen took the 3-2 lead and never looked back.\n\nA thrilling title game lived up to the billing as the encore to last year’s 5-4 overtime title match between the two clubs. Goalies Cassidy Traver (Axemen) and Kyle Underhill (Gulls) made multiple athletic, point-blank stops on both ends and gave their respective teams a chance to win the title. Ultimately, the Axemen prevailed to have their names forever etched onto the trophy as the 2024-25 CMHL Champions.\n\nWe’d like to extend all six teams, their players, coaches, and fans as well as our officiating crew and scorekeepers a thank you for a tremendous second season of the CMHL as your ongoing contributions make our league a success. We look forward to seeing you back next season as we continue to grow the CMHL. Check back in here throughout the offseason for league updates.`}
      />
      <NewsFeed
        title="Repeat or Revenge?"
        date="Monday, March 17, 2025"
        images={[
          "newsfeed/2025-03-17/2025-playoff-bracket-f.png",
          "newsfeed/2025-03-17/image1.jpeg",
          "newsfeed/2025-03-17/image2.jpeg",
          "newsfeed/2025-03-17/image3.jpeg",
          "newsfeed/2025-03-17/image4.jpeg",
          "newsfeed/2025-03-17/image5.jpeg",
          "newsfeed/2025-03-17/image6.jpeg",
          "newsfeed/2025-03-17/image7.jpeg",
          "newsfeed/2025-03-17/image8.jpeg",
          "newsfeed/2025-03-17/image9.jpeg",
          "newsfeed/2025-03-17/image10.jpeg",
          "newsfeed/2025-03-17/image11.jpeg",
          "newsfeed/2025-03-17/image12.jpeg",
        ]}
        imageSize="large"
        textBody={`The 2025 CMHL championship game is set for a rematch from 2024 after Friday night's semifinals gave us our two finalists.\n\nThe (1) Gulls advance after knocking off the (5) Jagrbombs, 5-1. A tightly contested 1-1 game into the third played to an exciting opening semifinal before four Gulls goals in 2:49 (two by John Pascente, and one each from Nick Bosco and Kyle Whalen) midway through the third gave the Gulls the decisive victory.\n\nIn the late window, two heavyweight contenders battled to determine our second finalist. With a 3-2 lead for the (3) Axemen over (2) Toonie Tuesday heading into the third, the Axemen shut the door on any Toonie Tuesday comeback with two late third period goals in 24 seconds to seal a 5-2 victory.\n\nOur championship final is now set with a (1) Gulls and (3) Axemen showdown in a rematch of last year's title game. The Axemen hope to avenge last year's heartbreaking overtime loss, while the Gulls aim to repeat as back-to-back CMHL Champions.\n\nPuck drops 9:30pm this Friday, March 21, Rink 3 at the Gale. Good luck to both teams.`}
      />
      <NewsFeed
        title="2025 CMHL Semifinals Set"
        date="Tuesday, March 11, 2025"
        images={["newsfeed/2025-playoff-bracket-sf.png"]}
        imageSize="large"
        textBody={`The 2025 CMHL semifinals are now set after last weekend's games rounded out our final four.\n\nIn the early window, the (3) Axemen advanced with a decisive 5-1 victory over the (6) Rockies. Later action saw the (5) Jagrbombs win a tightly contested quarterfinal against the (4) Mighty Drunks, 3-1.\n\nOur semifinal matchups are set for this Friday at the Gale with the (1) Gulls squaring off against (5) Jagrbombs at 9:15pm, and (2) Toonie Tuesday meeting the (3) Axemen immediately after at 10:15pm.\n\nThe winner of each matchup will advance to the second annual CMHL Final next Friday, March 21, 2025 at 9:30pm. Good luck to our semifinalists.`}
      />
      <NewsFeed
        title="2025 CMHL Playoffs Begin"
        date="Sunday, March 2, 2025"
        images={["newsfeed/2025-playoff-bracket-qf.jpg"]}
        imageSize="large"
        textBody={`Thank you everyone for a great regular season! Final stats and standings for the 2024-25 CMHL regular season has been updated.\n\nCongratulations to the (1) Gulls and (2) Toonie Tuesday for receiving byes to the semifinals. Our quarterfinal matchups begin this upcoming Friday with the (3) Axemen taking on the (6) Rockies at 8:15pm, and the (4) Mighty Drunks facing off against the (5) Jagrbombs at 9:15pm.\n\nPlease note, the next round of the playoffs will be reseeded where the lowest remaining seed will play the Gulls, with the other quarterfinal winner playing Toonie Tuesday.\n\nPlayoff OT/Shootout Format:\n- 3-on-3 for 5 minutes.\n- If there is still no score after OT, shootout best-of-5 shooters.\n- No same skaters in shootout. Shootout continues if tied after 5 shooters each in a best of 1 per round.\n- No skater can be used again until team has run out of skaters and then they must start from beginning again.\n\nGood luck to everyone!`}
      />
      <NewsFeed
        title="Gulls Win Inaugural CMHL Season"
        date="Thursday, July 25, 2024"
        images={["gulls-win-2024.jpg"]}
        imageSize="large"
        textBody={`A back and forth affair between the Gulls and Axemen played to an exciting title match. The Axemen quickly jumped out to a commanding lead before the Gulls dug deep and mounted a comeback to push the game into overtime. After successfully stealing the puck behind the net from an Axemen defender, Nick Bosco found Cesare Caldaroni who fired home the championship clinching goal. Congratulations to the Gulls on winning the inaugural league title!\n\nThank you to all players for making our first year a success and we look forward to next season.\n\nCheck back in the near future for details.`}
      />
      <NewsFeed
        title="Welcome to the CMHL"
        date="Tuesday, October 3, 2023"
        images={["logos/logo-transparent-black.png"]}
        imageSize="large"
        textBody={`Welcome to the official website of the Canucks Men's Hockey League (CMHL) based out of the Gale Centre Arena in Niagara Falls, Ontario. We are excited to drop the puck on our inaugural season with our first four teams - Axemen, Gulls, Rockies, and Whiskey Dekes. \n\nAll players are expected to register, know their team's schedule, and familiarize themselves with league rules and information. \n\nInterested in registering a team for next season? Please reach out to us at cmhlniagara@gmail.com`}
      />
    </div>
  );
}
