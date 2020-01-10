
AppRouter = Backbone.Router.extend({
    routes: {
        "": "home",
        "ovarian" : "ovarian",
        "cervical": "cervical",
        "endometrial": "endometrial"
    }
    
});

var router = new AppRouter;


router.on('route:home', function(){
    
    homeOpnoteView.render();
    
});

router.on('route:ovarian', function(){
    
    ovarianOpnoteView.render();
    
});

router.on('route:cervical', function(){
    
    cervicalOpnoteView.render();
    
});

router.on('route:endometrial', function(){
    
    endometrialOpnoteView.render();
    
});


Backbone.history.start();


