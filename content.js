// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      function highSchoolSort(tween,otherTween){
        var likesTween=integerLikes(findLikes(tween));
        var likesOtherTween=integerLikes(findLikes(otherTween));
        return likesOtherTween-likesTween;
      }

      function findLikes(tween){
        var likes=$("[title*='Like']");
        var likesEl=$(tween).find(likes);

        return likesEl.text();
      }

      function integerLikes(likes){
        likes = likes || "";
        var split = likes.split("K")
        if(split.length === 1) {
          return parseInt(likes);
        } else {
          return split[0] * 1000;
        }
      }

      var $songsUl=$('ul.lazyLoadingList__list');
      var $songs=$songsUl.find('li.searchList__item');
      $songs.sort(highSchoolSort);
      $songs.detach().appendTo($songsUl);
    };
  }
);
