/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    describe('RSS Feeds', function() {

        /* This test will make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it("url defined", function(){
           allFeeds.forEach(function(feed) {
    			      expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
              });
         });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it("name defined", function(){
           allFeeds.forEach(function(feed) {
    			      expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
              });
         });
    });

    describe("The Menu", function(){

      /* This test ensures the menu element is
       * hidden by default.
       */
       it("is hidden on load", function(){
         expect($('body').hasClass('menu-hidden')).toBe(true);
       });

       /* This test ensures the menu changes
        * visibility when the menu icon is clicked.
        */
        it("changes visibility when clicked on", function(){
            $(".menu-icon-link").trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);

            $(".menu-icon-link").trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);

        });

    });

    describe("Initial Entries", function() {

      beforeEach(function(done){
        loadFeed(0, done);

      });

      /* This test ensures when the loadFeed
       * function is called and completes its work, there needs to be at least
       * a single .entry element within the .feed container.
       */
       it("is NOT empty", function(done){
         expect($(".feed .entry").length).toBeGreaterThan(0);
         done();
       });
           });

  describe("New Feed Selection", function() {
    let oldFeed;
    let newFeed;

    beforeEach(function(done){
      loadFeed(0, function(){
        //Old Feeds
        oldFeed = $('.feed').html();
        //Newer feeds
        loadFeed(1, function(){
          newFeed = $('.feed').html();
          done();
        });
      });
    });
     /* This test ensures when a new feed is loaded
      * by the loadFeed function that the content actually changes.
      */
      it("is loaded", function(){
        expect(newFeed).not.toBe(oldFeed);
        console.log(oldFeed);
        console.log(newFeed);
      });
  });



}());
