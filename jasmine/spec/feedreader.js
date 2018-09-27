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
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /*  Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('all feeds have an url defined and not an empty string', function() {
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
            
        });

        
        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('all feeds have a defined name and names are not empty strings', function() {
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
            
        });
    });


    /* A new test suite named "The menu" */

    describe('The menu', function(){

        /* A test that ensures the menu element is
         * hidden by default.
         */

         
           it('Menu element is hidden by default', function(){
                expect($("body").hasClass("menu-hidden")).toBe(true);

            });
         

         /* Test that ensures the menu changes
          * visibility when the menu icon is clicked.
          */

          it('Menu changes visibility when menu is clicked', function(){
                $(".menu-icon-link").click();
                expect($("body").hasClass("menu-hidden")).toBe(false);

                $(".menu-icon-link").click();
                expect($("body").hasClass("menu-hidden")).toBe(true);

            });

          });

    /* Test suite named "Initial Entries" */

    describe('Initial Entries', function(){



        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

         beforeEach(done =>{
            loadFeed(0, done);
         });

         it("at least 1 entry found when loadfeed is called and done", function(){
            expect($(".feed .entry").length).toBeGreaterThan(0);
         });

          });

    /* Test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){
        

        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */

         beforeEach(done => {
            loadFeed(0, function(){
            firstFeed = $(".feed").html(); 

                loadFeed(1, function(){
                secondFeed = $(".feed").html();
                done();
            })
            }); 
        });

         it('content changes when new feed is loaded', function(){
            expect(firstFeed === secondFeed).toBe(false);
        });
    });

}());
