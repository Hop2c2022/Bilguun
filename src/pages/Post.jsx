import "./../css/Post.css";
import { Header2 } from "../component/Header2";
import { Footer } from "../component/Footer";

export const Post = () => {
  return (
    <div className="postcontainer">
      <Header2 />
      <div className="postbodypart">
        <div className="posttitle">10 Secrets for managing a remote team </div>
        <div className="postedby">
          <div className="postprofile"></div>
          <div className="posttexts">
            <div className="postprofilename">Shedrack eze</div>
            <div className="postspace">|</div>
            <div className="postprofiletime">2nd January,2022</div>
          </div>
        </div>
        <img className="clapping" src="assets/clapping.png" alt=""></img>
        <div className="posttexts2">
          <div className="posttext">
            If you’re thinking of starting a blog of your own, but just don’t
            have a clue on what to blog about, then fear not!
          </div>
          <div className="posttext">
            In this article, I have included a whole load of blog examples from
            a wide variety of different niches, all run on different blogging
            platforms like WordPress, Joomla! and Drupal.
          </div>
          <div className="posttext">
            Since the beginning of the internet, millions and millions and
            millions of blogs have been created. Many have died due to lost
            interest or their owners giving up on the idea, while others have
            thrived and continue to grow, making money and earning their owners
            a steady income. It’s a constant evolution of content that keeps
            people coming back for more, especially if these blogs contact
            highly resourceful material that people find useful and interesting.
          </div>
          <div className="posttext">
            Each example listed in this blog post are all different in some way
            and all bring something unique to their readers & subscribers. I
            want to show you what is possible and how you can take inspiration
            from them and create an awesome blog of your own.
          </div>
          <div className="posttext">
            Some of these blogs make over $100k a month, others are just a hobby
            for their owners, but all have the same purpose at their core… the
            love of writing and sharing information.
          </div>
        </div>
        <div className="writtenby">
          <div className="postprofile"></div>
          <div className="posttexts3">
            <div className="postwritten">Written by</div>
            <div className="postwritername">Shedrack Eze</div>
            <div className="postteamapp">CEO Team App</div>
          </div>
        </div>
        <div className="postline"></div>
        <div className="postcomments">
          <div className="postjoinconversation">Join Conversation</div>
          <div className="postcommentsection">
            <div className="postprofile"></div>
            <input
              type="text"
              className="postcommenttyper"
              placeholder="Comments"
            ></input>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
