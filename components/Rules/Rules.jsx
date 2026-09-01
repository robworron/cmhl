import React from "react";
import Link from "next/link";
import styles from "./rules.module.css";

export default function Rules() {
  return (
    <div className={styles.rules}>
      <h1>CMHL Rule Book</h1>
      <h6>LAST UPDATED: JUNE 24, 2026</h6>
      <h2>ADMINISTRATIVE REGULATIONS</h2>
      <ol>
        <li>
          All Hockey Canada rules apply unless otherwise amended below under
          league rules.{" "}
          <Link
            href="https://cdn.hockeycanada.ca/hockey-canada/Hockey-Programs/Officiating/Downloads/rulebook_casebook_e.pdf"
            style={{ textDecoration: "none", color: "black" }}
            target="__blank"
          >
            <b>Hockey Canada Rule Book</b>
          </Link>
        </li>
        <li>
          All league information, rules and regulations are subject to change.
          Only the league committee may vote on any decision relating to all
          rules and regulations outlined in this document.
        </li>
        <li>
          Failure to follow the rules within this document may result in the
          league committee issuing future disciplinary action.
        </li>
      </ol>
      <h2>LEAGUE RULES & REGULATIONS</h2>
      <ol>
        <li>
          All referee decisions are final. No protests allowed on the on-ice
          calls. Any conflicts will be reviewed by the league committee.
        </li>
        <li>
          Game Times
          <ul>
            <li>
              All games are two 10-minute and one 12-minute stop time periods.
            </li>
            <li>
              In the 3rd period, if there is a 5 goal spread the time will not
              be stopped; once the goal spread is less than 5, stop time will be
              returned.
            </li>
            <li>
              Games will be curfewed by the game officials at the appropriate
              time to ensure all games are run on time.
            </li>
          </ul>
        </li>
        <li>
          Teams are awarded 2 points for a win, 1 point for a tie, 0 points for
          a loss. No overtime for the regular season.
        </li>
        <li>
          All players must use C.S.A. approved equipment, including helmet with
          a properly fastened chin strap.
        </li>
        <li>Slap shots are allowed.</li>
        <li>
          There will be no touch icing. Icings will be determined by whether the
          puck is shot before the red line.
        </li>
        <li>
          If during a game the referee feels that any player is intoxicated and
          may be in danger of possibly injuring himself or other players, that
          player's Team Rep Must be notified at once by the on-ice officials and
          the player be instructed to leave the ice. Failure by that individual
          to leave the ice will result in a forfeiture and team loss.
        </li>
      </ol>
      <h2>FIGHTING</h2>
      <ol>
        <li>
          Fighting will not be tolerated. All fights will be reviewed by the
          league committee.
          <ul>
            <li>1st Offence - 1-2 game suspension. No registration refund.</li>
            <li>
              2nd Offence - 3 game suspension and could lead to league
              suspension.
            </li>
            <li>3rd Offence - league suspension.</li>
          </ul>
        </li>
      </ol>
      <h2>PENALTIES</h2>
      <ol>
        <li>
          Body checking will not be tolerated. Any deliberate body check will
          result in a major penalty.
        </li>
        <li>
          Major Penalties
          <ul>
            <li>A five minute major receives a 5 minute penalty.</li>
            <li>Will be reviewed by the league committee.</li>
          </ul>
        </li>
        <li>
          Multiple Minor Penalties
          <ul>
            <li>3 minor penalties will result in a game ejection.</li>
            <li>
              2nd offence in season will result in a game ejection + one game
              suspension.
            </li>
            <li>
              3rd offence in season will result in a game ejection + two game
              suspension + reviewed by league committee.
            </li>
          </ul>
        </li>
        <li>
          Inappropriate language or conduct between players, towards the game
          officials or fans will not be tolerated and will result in a penalty,
          and may lead to suspension.
        </li>
        <li>
          Attempt to injure (major or match) – shall be an automatic game
          suspension, with league committee review for possible further
          suspension or expulsion.
        </li>
        <li>
          Harassment of officials will not be tolerated; penalties will follow
          Hockey Canada rules and suspensions.
          <ul>
            <li>
              Verbal harassment of official will result in a game misconduct and
              one game suspension.
            </li>
            <li>
              Physical harassment of the officials (that’s not otherwise an
              attempt to injure) will result in a game misconduct and three game
              suspension.
            </li>
          </ul>
        </li>
        <li>
          Suspensions & Discipline
          <ul>
            <li>
              Referee will be responsible for notifying the league committee by
              the day following any game of any major penalties, game misconduct
              or game ejections.
            </li>
            <li>
              League President or representative will notify Team Rep of
              infraction and disciplinary action.
            </li>
            <li>
              Suspensions will carry into play-offs or if handed out during
              play-offs will carry into the following season.
            </li>
          </ul>
        </li>
      </ol>
      <h2>ROSTERS</h2>
      <ol>
        <li>Max Roster Size</li>
        <ul>
          <li>
            The maximum roster size is twenty-two (22) players plus a goalie.
          </li>
          <li>
            The first offence of when the season roster size exceeds 22 players,
            team deposit is lost.
          </li>
          <li>
            The second offence, any team uses an extra player that is not on
            their roster, they will forfeit the match.
          </li>
        </ul>
        <li>
          A team roster must be submitted to the league commissioner by the
          beginning of the first game of the season.
        </li>
        <li>
          Player Substitutions
          <ul>
            <li>
              No substitute players are allowed. Players on other teams active
              rosters can be used to fill roster positions. But the league
              commissioner must be notified who, and why.
            </li>
            <li>
              Substitute goalies are allowed. If you are scrambling for another
              goalie, please notify the league commissioner as they will attempt
              to find a goalie for you. (Please allow up to 2 hours notice for
              the commissioner to find you a goalie)
            </li>
            <li>
              No skater substitutions are allowed to play during playoffs.
            </li>
            <li>
              Players must play a minimum of five (5) regular season games to
              participate in playoffs.
            </li>
          </ul>
        </li>
      </ol>
      <h2>PLAYOFFS</h2>
      <ol>
        <li>
          Playoffs will remain two 10-minute and one 12-minute stop time
          periods.
        </li>
        <li>Runtime rule on 5 goal spread still in effect for playoffs</li>
        <li>OVERTIME - 5-minute, 3-on-3 sudden death.</li>
        <li>
          SHOOTOUT - If no goals are scored after overtime, there will be a best
          of five shootout with no repeat shooters. Shootout continues after
          fice if tied in a best of one per round.
        </li>
      </ol>
    </div>
  );
}
