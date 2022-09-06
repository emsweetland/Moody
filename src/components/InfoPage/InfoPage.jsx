import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <p>App is meant to simplify the reflection process and take a look at how the choices you make during the day may
        impact your overall mood. There are no quantities, each user reflects on their choices such as if they got enough
        sleep, or drank enough water. They can respond by saying they either did or didn’t, or that they tried their best.
        After a series of questions, the user is asked to pick a mood for the day. This is something that shouldn’t take
        more than a minute each day, but after some time you will have many reflections to look back on and find
        correlations between the choices you may have made on good or bad days. My app is designed to make the
        reflection process simple and easy, allowing you to keep logs that you can look back on days or weeks later.</p>
    </div>
  );
}

export default InfoPage;
