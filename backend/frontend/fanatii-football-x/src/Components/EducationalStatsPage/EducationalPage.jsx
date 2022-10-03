import React from 'react'
import './EducationalPage.css'
import Navbar from '../Global_Navbar/Navbar';
import Footer from '../Global_Footer/Footer'
import GlobalNavBottom from '../GlobalNavBottom/GlobalNavBottom';

function EducationalPage() {
  return (
    <>
    <Navbar idNav='nav-search' />
    <main id="eduactional-content-main-container">
        <h1 id="statistics-heading">Statistics Education</h1>
        <div id="data-coverage">
            <h3 className="data-coverage-heading">Where does the data for fanatii-football-x come from?</h3>
            <p className="data-coverage-text">
            The data come from a third-party provider that processes video from hundreds of football games every week. 
            The provider records various aspects of each event on video what happened, which players were involved, 
            where it occurred on the field, and when. Then the provider passes the data to clients including North Yard 
            Analytics, which further processes the data to create the metrics and ratings for fanatii-football-x.
            </p>
        </div>

        <div id="data-coverage">
            <h3 className="data-coverage-heading">What is a ball progression expected goals model?</h3>
            <p className="data-coverage-text">
            Players in possession of the ball pass through the same location on the pitch thousands of times in a given season. 
            Each time, the player's team may go on to score a goal or not. Historical data on these possessions can generate a probability 
            of going on to score from every location on the pitch. Because the probability changes from one location to the next, players may 
            add "expected goals" by progressing the ball to more advantageous locations. These expected goals offer another way to measure the 
            players' contributions to attacks.
            
            The "Statistics" tab in the player profile displays the percentage of ball progression expected goals that a player accrues from 
            passing and receiving. (The value of each pass is divided evenly between the passer and receiver.) The remainder of a player's ball 
            progression expected goals come from his individual actions.
            </p>
        </div>

        <div id="data-coverage">
            <h3 className="data-coverage-heading">What is a shot creation expected goals model?</h3>
            <p className="data-coverage-text">
            Every shot taken in football is unique, but shots often have characteristics in common: the location of the shot, the situation
            at the time of the shot, the action before the shot, etc. By looking historically at shots with similar characteristics, it's 
            possible to estimate the probability of a shot being scored by a generic striker against a generic goalkeeper in a given league. 
            This probability, between zero and one, is the "expected goals" from a shot. This amount of expected goals can be split between 
            all the players involved in the attack, so that players who did not take or assist the shot also receive credit for their 
            contributions.
            </p>
        </div>

        <div id="data-coverage">
            <h3 className="data-coverage-heading">Overall performance</h3>
            <p className="data-coverage-text">
            NYA uses two mathematical models to evaluate players' attacking and defending: 
            a shot creation model and a ball progression model. Both models calculate expected goals xG
            generated and conceded by teams during games. Then algorithms divide the models' estimates of xG for 
            xGF and xG against xGA into credits and demerits, respectively, for individual players.
            These credits and demerits are then compiled into ratings at each of nine major positions on the field:
            goalkeeper, centerback, fullback, defensive or holding midfielder, central midfielder, wide midfielder or
            wingback, attacking midfielder or second striker, winger, and center forward.
            </p>

            <ul id="performance-list">
                <li>
                    <h5 className="list-typeheading">Attacking</h5>
                    <div className="attacking-info">
                    NYA's attacking output rating is a measure of contributions to xGF per minute that a player's team
                    is in possession of the ball. A player can not easily advance the ball or create a shot when his 
                    team does not have possession. Yet within the time his team has possession, a player may use any 
                    number of touches to contribute to xGF. This is why NYA uses minutes in possession as a denominator.
                    </div>
                </li>

                <li>
                    <h5 className="list-typeheading">Defending</h5>
                    <div className="defending-info">
                    The identity of the defender for each attacking action is not always clear from event data, which NYA
                    uses because of its wide coverage and availability. So NYA developed an algorithm to guess the 
                    defending players during each move. In validation with video, this algorithm has proven to be correct 
                    in two thirds of events during typical games. Though imperfect, the algorithm picks up sufficient 
                    signal to assess defending over periods of several games or seasons.

                    A measures defending as a combination of defending quantity and defending quality. 
                    Defending quantity is the number of defending opportunities a player has per minute out of possession,
                    estimated using the algorithm above. A player is not in complete control of the number of times he is 
                    called on to defend, though the most and least aggressive players can affect this frequency. Unlike in 
                    attacking, players usually can not take multiple touches to defend an oncoming attacker. So defending 
                    quality is a measure of the contributions to xGA conceded per defending opportunity, rather than per minute
                    out of possession.
                    </div>
                </li>

                <li>
                    <h5 className="list-typeheading">Ball Retention</h5>
                    <div className="ball-retention-info">
                    NYA uses a separate model to measure ball retention, the likelihood that a team will keep possession after a player 
                    touches the ball. This is not a measure of a player's contribution to winning but can be an important aspect of performance
                    that combines skill and style.
                    The model calculates the likelihood of keeping possession when executing a specific action at a specific location on the
                    pitch, then compares that likelihood to individual players' success in keeping possession in the same situations. The 
                    differences between players' success rates and the average success rates in their leagues are then averaged across all their
                    actions and standardized as above.
                    </div>
                </li>

                <li>
                    <h5 className="list-typeheading">SKill in Shooting</h5>
                    <div className="shooting-info">
                    Each shot can be thought of as a duel between the striker and the goalkeeper, and each duel can be handicapped using the 
                    baseline probability of scoring (xG) and the skill levels of the two players. As above, shooting and saving skill can be 
                    tracked separately and simultaneously. However, computing ratings based on single shots, as with the duels above, creates 
                    a problem because of the relative rarity of goals. NYA's solution to this problem is to group shots into batches.

                    Using batches smoothes out the ratings and allows strikers and goalkeepers to be assessed across large numbers of opponents.
                    Each striker is given a rating based on his likelihood of scoring with a batch of shots from which a generic striker would 
                    have a 50% chance of scoring at least once against a generic goalkeeper. Each goalkeeper is given a rating based on his 
                    likelihood of stopping a batch of shots from which a generic striker would have a 50% chance of scoring at least once against
                    a generic goalkeeper.
                    </div>
                </li>

                <li>
                    <h5 className="list-typeheading">Style</h5>
                    <div className="style-info">
                        <p className="style-text">NYA measures playing style across eight dimensions, defined as follows.</p>
                        <p className="style-text">
                            Disrupting opposition moves: attempt to break up an opposition move by tackling or fouling a player,
                            or by clearing, punching, blocking, or kicking the ball out of bounds (per minute out of possession)
                        </p>

                        <p className="style-text">
                        Recovering a moving ball: regain possession by intercepting, saving, smothering, or otherwise picking up the ball (per minute out of possession)
                        </p>

                        <p className="style-text">
                        Aerial duels: engage in an aerial duel (per minute played)
                        </p>

                        <p className="style-text">
                        Passing toward goal: a pass that brings the ball at least 10 meters closer to the center of the opponent's goal (per attacking touch)
                        </p>

                        <p className="style-text">
                        Link-up passing: any other pass (per attacking touch)
                        </p>

                        
                        <p className="style-text">
                        Dribbling: move the ball by advancing it uncontested at least 10% of the length of the field or 
                        by taking on a player (per attacking touch)
                        </p>

                        
                        <p className="style-text">
                        Receiving in the box: receive the ball in the opposition penalty area (per attacking touch)
                        </p>

                        
                        <p className="style-text">
                        Shooting: shoot the ball except from a penalty (per attacking touch)
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        <Footer idFooter='home-footer'/>
        <GlobalNavBottom navBottom='home-bottom-nav'/>
    </main>
    </>
  )
}

export default EducationalPage