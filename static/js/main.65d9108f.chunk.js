(this.webpackJsonplibrary=this.webpackJsonplibrary||[]).push([[0],{178:function(e,a,t){e.exports=t(195)},195:function(e,a,t){"use strict";t.r(a);var n=t(15),r=t(0),o=t.n(r),l=t(61),i=t.n(l),c=t(129),s=t(119),u=Object(s.a)({components:{}}),m=t(67),g=t(20),d=t(210),b=t(3),h=t(212),p=t(229),f=t(140),E=t(99),y=t(49);var k=function(e){return o.a.createElement(y.a,{isOpen:e.isOpen,onClose:e.toggleIsOpen},o.a.createElement(y.f,null),o.a.createElement(y.c,null,o.a.createElement(y.e,null,e.header),o.a.createElement(y.b,null,e.children)))},v=t(7),O=t(58);function I(e){return Object(v.c)((function(a){return a.books.booksArray.find((function(a){return a.id===e}))}))}function S(e,a){var t=a/e*100;return Math.trunc(t)}function j(e){var a=I(e).genres,t=Object(v.c)((function(e){return e.genres.genreArray})),n=[];return a.forEach((function(e){n.push(t[e])})),n}var w=Object(O.b)({name:"books",initialState:{booksArray:[{id:"0",title:"Sapiens: A Brief History of Humankind",author:"Yuval Noah Harari",imageSrc:"https://m.media-amazon.com/images/I/51Sn8PEXwcL.jpg",description:'From a renowned historian comes a groundbreaking narrative of humanity\'s creation and evolution - a number one international best seller - that explores the ways in which biology and history have defined us and enhanced our understanding of what it means to be "human".',genres:[7,10],pages:441,pagesRead:441,rating:5},{id:"1",title:"Fences",author:"August Wilson",imageSrc:"https://images-na.ssl-images-amazon.com/images/I/51hA9YNKqAL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",description:"Troy Maxson is a strong man, a hard man. He has had to be to survive. Troy Maxson has gone through life in an America where to be proud and black is to face pressures that could crush a man, body and soul. But the 1950s are yielding to the new spirit of liberation in the 1960s, a spirit that is changing the world Troy Maxson has learned to deal with the only way he can, a spirit that is making him a stranger, angry and afraid, in a world he never knew and to a wife and son he understands less and less. This is a modern classic, a book that deals with the impossibly difficult themes of race in America, set during the Civil Rights Movement of the 1950s and 60s.",genres:[7],pages:229,pagesRead:109,rating:0},{id:"2",title:"The Road",author:"Cormac McCarthy",imageSrc:"https://images-na.ssl-images-amazon.com/images/I/41DOUWI2haL._SX323_BO1,204,203,200_.jpg",description:"A father and his son walk alone through burned America. Nothing moves in the ravaged landscape save the ash on the wind. It is cold enough to crack stones, and when the snow falls it is gray. The sky is dark. Their destination is the coast, although they don't know what, if anything, awaits them there. They have nothing; just a pistol to defend themselves against the lawless bands that stalk the road, the clothes they are wearing, a cart of scavenged food\u2014and each other.",genres:[7],pages:209,pagesRead:10,rating:1.5},{id:"3",title:"Recursion",author:"Blake Crouch",imageSrc:"https://m.media-amazon.com/images/I/51HsFY3rRBL._SY346_.jpg",description:"Reality is broken.\nAt first, it looks like a disease. An epidemic that spreads through no known means, driving its victims mad with memories of a life they never lived. But the force that\u2019s sweeping the world is no pathogen. It\u2019s just the first shock wave, unleashed by a stunning discovery\u2014and what\u2019s in jeopardy is not our minds but the very fabric of time itself.\n\nIn New York City, Detective Barry Sutton is closing in on the truth\u2014and in a remote laboratory, neuroscientist Helena Smith is unaware that she alone holds the key to this mystery . . . and the tools for fighting back.\nTogether, Barry and Helena will have to confront their enemy\u2014before they, and the world, are trapped in a loop of ever-growing chaos.",genres:[12,16,20],pages:305,pagesRead:277,rating:2.5},{id:"4",title:"The Little Prince",author:"Antoine de Saint-Exupery",imageSrc:"https://images-na.ssl-images-amazon.com/images/I/41MkVPBdOOL._SX317_BO1,204,203,200_.jpg",description:"The Little Prince is a classic tale of equal appeal to children and adults. On one level it is the story of an airman's discovery, in the desert, of a small boy from another planet - the Little Prince of the title - and his stories of intergalactic travel, while on the other hand it is a thought-provoking allegory of the human condition.",genres:[0,3,4],pages:100,pagesRead:0,rating:4},{id:"5",title:"1984",author:"George Orwell",imageSrc:"https://images-na.ssl-images-amazon.com/images/I/41aM4xOZxaL._SX277_BO1,204,203,200_.jpg",genres:[4,8],pages:181,pagesRead:100,rating:3.5}],sortBy:"title",sortByOrder:"ascending",filter:[]},reducers:{addBook:function(e,a){e.booksArray.push(a.payload),A(e)},editBook:function(e,a){e.booksArray.forEach((function(e,t,n){e.id===a.payload.id&&(n[t]=a.payload)}))},completeBook:function(e,a){var t=e.booksArray.find((function(e){return e.id===a.payload}));t.pagesRead=t.pages,"progress"===e.sortBy&&A(e)},addPagesRead:function(e,a){var t=parseInt(a.payload.pagesToAdd,10),n=e.booksArray.find((function(e){return e.id===a.payload.id}));t+n.pagesRead>n.pages?n.pagesRead=n.pages:n.pagesRead+=t,"progress"===e.sortBy&&A(e)},setPagesRead:function(e,a){var t=parseInt(a.payload.pagesRead,10);if(!(t<0)){var n=e.booksArray.find((function(e){return e.id===a.payload.id}));t>n.pages?n.pagesRead=n.pages:n.pagesRead=t,"progress"===e.sortBy&&A(e)}},setRating:function(e,a){e.booksArray.find((function(e){return e.id===a.payload.id})).rating=a.payload.rating,"rating"===e.sortBy&&A(e)},removeBook:function(e,a){e.booksArray=e.booksArray.filter((function(e){return e.id!==a.payload}))},changeSort:function(e,a){e.sortBy=a.payload},sortBooks:function(e){A(e)},changeSortOrder:function(e,a){e.sortByOrder=a.payload},changeFilter:function(e,a){e.filter=a.payload}}});function A(e){var a=e.sortBy;"title"===a?(e.booksArray.sort((function(e,a){return e.title.toLocaleLowerCase()<a.title.toLocaleLowerCase()?1:-1})),"ascending"===e.sortByOrder&&e.booksArray.reverse()):"rating"===a?(e.booksArray.sort((function(e,a){return e.rating>a.rating?-1:1})),"ascending"===e.sortByOrder&&e.booksArray.reverse()):"progress"===a&&(e.booksArray.sort((function(e,a){return S(e.pages,e.pagesRead)>S(a.pages,a.pagesRead)?-1:1})),"ascending"===e.sortByOrder&&e.booksArray.reverse())}var R=w.actions,C=R.addBook,B=R.editBook,T=R.completeBook,x=R.addPagesRead,F=R.setPagesRead,z=R.setRating,L=R.removeBook,N=R.changeSort,V=R.changeSortOrder,_=R.sortBooks,M=R.changeFilter,q=w.reducer,D=t(74),G=t(207),P=t(208),Y=t(209),H=t(228),W=t(97);var K=function(e){var a,t,n,r,l,i,c=Object(v.c)((function(e){return e.genres.genreArray})),s=Object(W.a)(),u=s.register,m=s.handleSubmit,g=s.formState,b=g.isSubmitting,h=g.errors,p=s.getValues;return o.a.createElement("form",{onSubmit:m(e.onSubmit)},o.a.createElement(D.a,{isRequired:!0},o.a.createElement(G.a,{htmlFor:"title"},"Title"),o.a.createElement(P.a,Object.assign({defaultValue:null===(a=e.book)||void 0===a?void 0:a.title,id:"title",name:"title"},u("title",{required:"This is required"}))),o.a.createElement(Y.a,{color:"red.500"},h.name&&h.name.message)),o.a.createElement(D.a,{isRequired:!0},o.a.createElement(G.a,{htmlFor:"author"},"Author"),o.a.createElement(P.a,Object.assign({id:"author",defaultValue:null===(t=e.book)||void 0===t?void 0:t.author},u("author",{required:"This is required"}))),o.a.createElement(Y.a,{color:"red.500"},h.author&&h.author.message)),o.a.createElement(D.a,{isRequired:!0},o.a.createElement(G.a,{htmlFor:"pages"},"Number of pages"),o.a.createElement(P.a,Object.assign({id:"pages",name:"pages",type:"number",defaultValue:null===(n=e.book)||void 0===n?void 0:n.pages},u("pages",{required:"This is required",valueAsNumber:!0,validate:{positive:function(e){return parseInt(e,10)>0||"Number of pages should be positive"}}}))),o.a.createElement(Y.a,{color:"red.500"},h.pages&&h.pages.message)),!e.editMode||o.a.createElement(o.a.Fragment,null,o.a.createElement(D.a,null,o.a.createElement(G.a,{htmlFor:"pagesRead"},"Number of pages read"),o.a.createElement(P.a,Object.assign({id:"pagesRead",name:"pagesRead",type:"number",defaultValue:null===(r=e.book)||void 0===r?void 0:r.pagesRead},u("pagesRead",{valueAsNumber:!0,validate:{nonNegative:function(e){return parseInt(e,10)>=0||"Number of pages read shouldn't be negative"},notBiggerThanPages:function(e){return e<=p().pages||"Number of pages read shouldn't be bigger than number of pages"}}}))),o.a.createElement(Y.a,{color:"red.500"},h.pagesRead&&h.pagesRead.message)),o.a.createElement(D.a,null,o.a.createElement(G.a,{htmlFor:"rating"},"Rating"),o.a.createElement(P.a,Object.assign({id:"rating",name:"rating",type:"number",step:"any",defaultValue:null===(l=e.book)||void 0===l?void 0:l.rating},u("rating",{valueAsNumber:!0,max:{value:5,message:"Ratings can only go up to 5"},min:{value:0,message:"Ratings shouldn't be negative"},validate:{isMultiple:function(e){return Number.isInteger(e/.5)||"The rating should be a multiple of 0.5"}}}))),o.a.createElement(Y.a,{color:"red.500"},h.rating&&h.rating.message))," "),o.a.createElement(D.a,null,o.a.createElement(G.a,{htmlFor:"genres"},"Genres"),o.a.createElement(d.a,{id:"genres"},c.map((function(a,t){var n,r=null===(n=e.bookGenres)||void 0===n?void 0:n.includes(a);return o.a.createElement(H.a,Object.assign({defaultIsChecked:r,mr:"3",value:t,key:a},u("genreArray."+a)),a)})))),o.a.createElement(D.a,null,o.a.createElement(G.a,{htmlFor:"image"},"Image URL"),o.a.createElement(P.a,Object.assign({id:"image",type:"url",defaultValue:null===(i=e.book)||void 0===i?void 0:i.imageSrc},u("image")))),o.a.createElement(d.a,{mt:"2",textAlign:"right"},o.a.createElement(f.a,{isLoading:b,type:"submit",colorScheme:"green"},"Submit")))};var U=function(e){var a=Object(v.b)();return o.a.createElement(K,{onSubmit:function(t){t.genreArray=Object.values(t.genreArray),t.genreArray=t.genreArray.filter((function(e){return!1!==e})),""===t.image&&(t.image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbJk-qCpmshndFRatcLSOB8GsyboaySnGpeS2GvkZsQShaZpccKqkkK4MkBRGbIVOBnzw&usqp=CAU");var n={id:t.title,title:t.title,author:t.author,imageSrc:t.image,genres:t.genreArray,pages:t.pages,pagesRead:0,rating:0};a(C(n)),e.toggleIsOpen()}})},Z=t(10);var J=function(){var e=Object(v.b)(),a=Object(r.useState)(!1),t=Object(b.a)(a,2),n=t[0],l=t[1];function i(){l(!n)}var c=Object(v.c)((function(e){return e.color})),s=Object(v.c)((function(e){return e.genres.genreArray})),u=Object(v.c)((function(e){return e.books.sortBy})),m=Object(v.c)((function(e){return e.books.sortByOrder})),g=Object(v.c)((function(e){return e.books.filter}));return o.a.createElement(h.a,{mt:"4"},o.a.createElement(p.a,{isLazy:!0,closeOnSelect:!1},o.a.createElement(p.b,{as:f.a,colorScheme:c,size:"sm",rightIcon:o.a.createElement(E.a,{as:Z.i}),variant:"outline"},"Sort"),o.a.createElement(p.f,null,o.a.createElement(p.g,{title:"Sort by",defaultValue:u,type:"radio",onChange:function(a){return e(N(a))}},o.a.createElement(p.e,{value:"title"},"Title"),o.a.createElement(p.e,{value:"rating"},"Rating"),o.a.createElement(p.e,{value:"progress"},"Progress")),o.a.createElement(p.c,null),o.a.createElement(p.g,{title:"Order",defaultValue:m,type:"radio",onChange:function(a){return e(V(a))}},o.a.createElement(p.e,{value:"ascending"},"Ascending"),o.a.createElement(p.e,{value:"descending"},"Descending")))),o.a.createElement(p.a,{isLazy:!0,closeOnSelect:!1},o.a.createElement(p.b,{ml:"2",as:f.a,colorScheme:c,size:"sm",rightIcon:o.a.createElement(E.a,{as:Z.g}),variant:"outline"},"Filter"),o.a.createElement(p.f,null,o.a.createElement(p.g,{onChange:function(a){return e(M(a))},title:"Genre",type:"checkbox",value:g},s.map((function(e){return o.a.createElement(p.e,{type:"checkbox",key:e,value:e},e)}))))),o.a.createElement(f.a,{onClick:i,placeSelf:"flex-end",size:"sm",colorScheme:c,ml:"auto",rightIcon:o.a.createElement(E.a,{as:Z.h}),variant:"outline"},"New"),o.a.createElement(k,{header:"Add new book",toggleIsOpen:i,isOpen:n},o.a.createElement(U,{toggleIsOpen:i})))},X=t(237),Q=t(137),$=t(217),ee=t(234);var ae=function(e){var a=Object(r.useState)(1),t=Object(b.a)(a,2),n=t[0],l=t[1];return o.a.createElement($.a,{as:m.b,onFocus:function(){l(e.scale)},onBlur:function(){l(1)},display:"inline-block",to:"/books/"+e.bookId},o.a.createElement(ee.a,{src:e.imageSrc,borderRadius:"md",h:"48",w:"36",objectFit:"fill",mt:"-7",transitionDuration:"0.3s",_hover:{transform:"scale("+e.scale+")"},transform:"scale("+n+")",alt:"book cover"}))},te=t(220),ne=t(213),re=t(227);var oe=function(e){var a=I(e.bookId),t=a.pages,n=a.pagesRead;return o.a.createElement(y.a,{isOpen:e.isOpen,onClose:e.toggleIsOpen},o.a.createElement(y.f,null),o.a.createElement(y.c,null,o.a.createElement(y.e,null,e.header),o.a.createElement(y.b,null,o.a.createElement("form",{onSubmit:e.onSubmit},o.a.createElement(D.a,{min:"0",max:t-n},o.a.createElement(G.a,null,e.label),o.a.createElement(re.a,null,o.a.createElement(re.b,null),o.a.createElement(D.b,null,"Currently, you have read ",n," out of ",t," pages.")),o.a.createElement(d.a,{textAlign:"right"},o.a.createElement(f.a,{mt:"2",ml:"auto",colorScheme:"green"},e.submitButton)))))))};var le=function(e){var a=Object(v.b)();return o.a.createElement(oe,{header:"Add pages read",label:"Number of pages to add",submitButton:"Add pages",onSubmit:function(t){t.preventDefault(),a(x({id:e.bookId,pagesToAdd:t.target.children[0].children[1].children[0].value})),e.toggleIsOpen()},bookId:e.bookId,isOpen:e.isOpen,toggleIsOpen:e.toggleIsOpen})};var ie=function(e){var a=Object(ne.a)(),t=a.isOpen,n=a.onToggle;return o.a.createElement(d.a,null,o.a.createElement(p.d,{onClick:n,icon:o.a.createElement(E.a,{as:Z.h})},"Add pages read"),o.a.createElement(le,{toggleIsOpen:n,isOpen:t,bookId:e.bookId}))};var ce=function(e){var a=Object(v.b)();return o.a.createElement(oe,{header:"Set pages read",label:"New number of pages read",submitButton:"Set",onSubmit:function(t){t.preventDefault(),a(F({id:e.bookId,pagesRead:t.target.children[0].children[1].children[0].value})),e.toggleIsOpen()},bookId:e.bookId,isOpen:e.isOpen,toggleIsOpen:e.toggleIsOpen})};var se=function(e){var a=Object(ne.a)(),t=a.isOpen,n=a.onToggle;return o.a.createElement(d.a,null,o.a.createElement(p.d,{onClick:n,icon:o.a.createElement(E.a,{as:Z.c})},"Set pages read"),o.a.createElement(ce,{toggleIsOpen:n,isOpen:t,bookId:e.bookId}))};var ue=function(e){var a=Object(v.b)(),t=Object(W.a)(),n=t.register,r=t.handleSubmit,l=t.formState.errors;return o.a.createElement("form",{onSubmit:r((function(t){a(z({id:e.bookId,rating:t.rating})),e.toggleIsOpen()}))},o.a.createElement(D.a,null,o.a.createElement(P.a,n("rating",{valueAsNumber:!0,max:{value:5,message:"Ratings can only go up to 5"},min:{value:0,message:"Ratings shouldn't be negative"},validate:{isMultiple:function(e){return Number.isInteger(e/.5)||"The rating should be a multiple of 0.5"}}})),o.a.createElement(Y.a,{color:"red.500"},l.rating&&l.rating.message),o.a.createElement(D.b,null,"If you give 0 stars, the book will be considered unrated."),o.a.createElement(d.a,{textAlign:"right",mt:"2"},o.a.createElement(f.a,{colorScheme:"green"},"Rate"))))};var me=function(e){return o.a.createElement(y.a,{isOpen:e.isOpen,onClose:e.toggleIsOpen},o.a.createElement(y.f,null),o.a.createElement(y.c,null,o.a.createElement(y.e,null,"Rate this book"),o.a.createElement(y.b,null,o.a.createElement(ue,{setRating:e.setRating,bookId:e.bookId,toggleIsOpen:e.toggleIsOpen}))))};var ge=function(e){var a=Object(ne.a)(),t=a.isOpen,n=a.onToggle;return o.a.createElement(d.a,null,o.a.createElement(p.d,{onClick:n,icon:o.a.createElement(E.a,{as:Z.j})},"Rate"),o.a.createElement(me,{toggleIsOpen:n,isOpen:t,bookId:e.bookId}))},de=t(219);var be=function(e){var a=Object(v.b)(),t=Object(r.useRef)();return o.a.createElement(de.a,{isOpen:e.dialogIsOpen,leastDestructiveRef:t,onClose:e.toggleDialog},o.a.createElement(y.f,null,o.a.createElement(de.b,null,o.a.createElement(y.e,null,"Delete book"),o.a.createElement(y.b,null,"Are you sure? This action cannot be undone."),o.a.createElement(y.d,null,o.a.createElement(f.a,{ref:t,onClick:e.toggleDialog},"Cancel"),o.a.createElement(f.a,{colorScheme:"red",ml:"3",onClick:function(){a(L(e.bookId)),e.toggleDialog()}},"Delete")))))};var he=function(e){var a=Object(ne.a)(),t=a.isOpen,n=a.onToggle;return o.a.createElement(d.a,null,o.a.createElement(p.d,{onClick:n,icon:o.a.createElement(E.a,{as:Z.m})},"Delete book"),o.a.createElement(be,{toggleDialog:n,dialogIsOpen:t,bookId:e.bookId}))};var pe=function(e){var a=Object(v.b)();return o.a.createElement(p.d,{onClick:function(){a(T(e.bookId))},icon:o.a.createElement(E.a,{as:Z.d})},"Mark as completed")};var fe=function(e){var a=Object(v.c)((function(a){return a.books.booksArray.find((function(a){return a.id===e.bookId}))})),t=S(a.pages,a.pagesRead);return o.a.createElement(p.a,{isLazy:!0},o.a.createElement(p.b,{as:te.a,variant:"none",onFocus:e.setIconVisibilityTrue,onBlur:e.setIconVisibilityFalse,_focus:{outlineColor:"blue.200"},outlineOffset:"-4px",w:"2","aria-label":"book actions",icon:o.a.createElement(E.a,{_hover:{cursor:"pointer"},as:Z.f,visibility:e.iconVisibility,color:e.color+".700"})}),o.a.createElement(p.f,null,100===t||o.a.createElement(ie,{bookId:e.bookId}),o.a.createElement(se,{bookId:e.bookId}),100===t||o.a.createElement(pe,{bookId:e.bookId}),100!==t||o.a.createElement(ge,{bookId:e.bookId}),o.a.createElement(he,{bookId:e.bookId})))};var Ee=function(e){var a=I(e.bookId).imageSrc,t=Object(v.c)((function(e){return e.color}));return o.a.createElement(d.a,{borderBottomWidth:"1px",py:"1",bg:t+".50"},o.a.createElement(d.a,{textAlign:"right"},o.a.createElement(fe,{setIconVisibilityTrue:e.setIconVisibilityTrue,setIconVisibilityFalse:e.setIconVisibilityFalse,iconVisibility:e.iconVisibility,bookId:e.bookId})),o.a.createElement(d.a,{textAlign:"center"},o.a.createElement(ae,{bookId:e.bookId,imageSrc:a,scale:1.05})))},ye=t(235),ke=t(221);var ve=function(e){var a=I(e.bookId),t=a.title,n=a.author,r=S(a.pages,a.pagesRead),l=Object(v.c)((function(e){return e.color})),i=j(e.bookId);return o.a.createElement(d.a,{mx:"2",mt:"2"},o.a.createElement(ye.a,{my:"-1"},o.a.createElement(E.a,{as:100===r?Z.a:Z.b,color:l+".700"}),o.a.createElement(Y.a,{isTruncated:!0},t)),o.a.createElement(Y.a,{as:"i",fontSize:"11"},"by ",n),o.a.createElement(ye.a,{mt:"1"},i.map((function(e,a){return a>3||o.a.createElement(ke.a,{size:"sm",colorScheme:l,key:a},o.a.createElement(ke.b,null,e))}))))},Oe=t(230),Ie=t(236);var Se=function(e){for(var a=[],t=0;t<10;t++)t%2===0?t/2<e.starsFilled?a.push(o.a.createElement(E.a,{boxSize:e.starSize,mr:-e.starSize,color:"yellow.300",as:Z.k,key:t})):a.push(o.a.createElement(E.a,{key:t,boxSize:e.starSize,mr:-e.starSize,as:Z.k})):t/2<e.starsFilled?a.push(o.a.createElement(E.a,{key:t,transform:"rotateY(180deg)",color:"yellow.300",as:Z.k,boxSize:e.starSize})):a.push(o.a.createElement(E.a,{key:t,boxSize:e.starSize,transform:"rotateY(180deg)",as:Z.k}));return a};var je=function(e){var a=I(e.bookId),t=a.pages,n=a.pagesRead,l=a.rating,i=S(t,n),c=Object(v.c)((function(e){return e.color}));return o.a.createElement(d.a,{mx:"2"},"progress"===e.type?o.a.createElement(r.Fragment,null,o.a.createElement(Y.a,{fontSize:"12",align:"right"},i,"% read"),o.a.createElement(Oe.a,{placement:"bottom",label:n+"/"+t,openDelay:250,hasArrow:!0,shouldWrapChildren:!0},o.a.createElement(Ie.a,{value:i,colorScheme:c,hasStripe:!0,display:"block","aria-label":"progress bar"}))):o.a.createElement(h.a,{mt:"1"},o.a.createElement(Se,{starsFilled:l,starSize:"5"}),o.a.createElement(Y.a,{fontSize:"14",ml:"1"},0===l?"Unrated":l+"/5")))};var we=function(e){var a=Object(r.useState)("hidden"),t=Object(b.a)(a,2),n=t[0],l=t[1];function i(){l("visible")}function c(){l("hidden")}return o.a.createElement(h.a,{flexDir:"column",borderWidth:"1px",pb:"2",w:"64",h:"min-content",boxShadow:"base",onMouseOver:i,onMouseLeave:c},o.a.createElement(Ee,{bookId:e.bookId,iconVisibility:n,setIconVisibilityTrue:i,setIconVisibilityFalse:c}),o.a.createElement(ve,{bookId:e.bookId}),o.a.createElement(je,{bookId:e.bookId,type:e.footerType}))};var Ae=function(e){return o.a.createElement(Q.a,{autoFlow:"row",templateColumns:"repeat(2, 1fr)",gap:"3"},e.books.map((function(a){return o.a.createElement(Q.b,{key:a.id},o.a.createElement(we,{bookId:a.id,footerType:e.footerType}))})))};var Re=function(){var e=Object(v.c)((function(e){return e.books.booksArray})),a=Object(r.useState)(e),t=Object(b.a)(a,2),n=t[0],l=t[1],i=Object(r.useState)(n.filter((function(e){return e.pagesRead===e.pages}))),c=Object(b.a)(i,2),s=c[0],u=c[1],m=Object(r.useState)(n.filter((function(e){return e.pagesRead!==e.pages}))),g=Object(b.a)(m,2),d=g[0],h=g[1],p=Object(v.c)((function(e){return e.genres.genreArray})),f=Object(v.c)((function(e){return e.books.filter}));Object(r.useEffect)((function(){0!==f.length?l(e.filter((function(e){return e.genres.some((function(e){return f.includes(p[e])}))}))):l(e)}),[f,e,p]),Object(r.useEffect)((function(){u(n.filter((function(e){return e.pagesRead===e.pages}))),h(n.filter((function(e){return e.pagesRead!==e.pages})))}),[n]);var E=Object(v.b)(),y=Object(v.c)((function(e){return e.books.sortBy})),k=Object(v.c)((function(e){return e.books.sortByOrder}));Object(r.useEffect)((function(){E(_(y))}),[y,k,E]);var O=Object(v.c)((function(e){return e.color}));return o.a.createElement(X.e,{isLazy:!0,colorScheme:O,mt:"2"},o.a.createElement(X.b,{mb:"2"},o.a.createElement(X.a,{outlineOffset:"-3",_focus:{outlineColor:"blue.200"}},"Currently reading"),o.a.createElement(X.a,{outlineOffset:"-3",_focus:{outlineColor:"blue.200"}},"Finished"),o.a.createElement(X.a,{outlineOffset:"-3",_focus:{outlineColor:"blue.200"}},"All")),o.a.createElement(X.d,{h:"80vh",overflowY:"scroll"},o.a.createElement(X.c,null,o.a.createElement(Ae,{books:d,footerType:"progress"}),0!==d.length||o.a.createElement(Y.a,{textAlign:"center"},'You aren\'t reading any book right now. Add a new one by clicking "New book" above.')),o.a.createElement(X.c,null,o.a.createElement(Ae,{books:s,footerType:"rating"}),0!==s.length||o.a.createElement(Y.a,{textAlign:"center"},"No finished books yet.")),o.a.createElement(X.c,null,o.a.createElement(Ae,{books:n,footerType:"progress"}),0!==n.length||o.a.createElement(Y.a,{textAlign:"center"},'You have no books added! Start adding them by clicking "New book" above.'))))};var Ce=function(){var e=Object(v.c)((function(e){return e.color}));return o.a.createElement(d.a,{w:"xl",mx:"auto",bg:"white"},o.a.createElement(J,{color:e}),o.a.createElement(Re,null))},Be=t(222);var Te=function(e){return o.a.createElement(Be.d,null,o.a.createElement(Be.c,null,o.a.createElement(h.a,{alignItems:"center"},o.a.createElement(E.a,{as:e.icon,mr:"2",color:e.iconColor}),o.a.createElement(Y.a,{letterSpacing:"wider",mr:"4",fontWeight:"light"},e.label))),o.a.createElement(Be.c,null,o.a.createElement(d.a,{fontWeight:"medium"},e.data)))};var xe=function(e){var a=Object(v.b)(),t=j(e.book.id);return o.a.createElement(K,{book:e.book,onSubmit:function(t){t.genreArray=Object.values(t.genreArray),t.genreArray=t.genreArray.filter((function(e){return!1!==e})),""===t.image&&(t.image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbJk-qCpmshndFRatcLSOB8GsyboaySnGpeS2GvkZsQShaZpccKqkkK4MkBRGbIVOBnzw&usqp=CAU");var n={id:e.book.id,title:t.title,author:t.author,imageSrc:t.image,genres:t.genreArray,pages:t.pages,pagesRead:t.pagesRead,rating:t.rating};a(B(n)),e.toggleIsOpen()},bookGenres:t,editMode:!0})};var Fe=function(){var e=I(Object(g.f)().bookId),a=Object(v.c)((function(e){return e.color})),t=Object(ne.a)(),n=t.isOpen,r=t.onToggle,l=j(e.id);return o.a.createElement(d.a,{bg:a+".50"},o.a.createElement(h.a,{w:"container.md",h:"100vh",px:"6",mx:"auto",shadow:"lg",bg:"white",direction:"column"},o.a.createElement(te.a,{variant:"ghost",ml:"auto",mr:"4",mt:"1",w:"8",colorScheme:a,size:"md",icon:o.a.createElement(E.a,{as:Z.e}),onClick:r,"aria-label":"edit book"}),o.a.createElement(k,{header:"Edit book",isOpen:n,toggleIsOpen:r},o.a.createElement(xe,{isOpen:n,toggleIsOpen:r,book:e})),o.a.createElement(h.a,{alignItems:"center",justify:"center"},o.a.createElement(ee.a,{src:e.imageSrc,w:"60",h:"80",shadow:"base",alt:"book cover"}),o.a.createElement(Be.a,{w:"2/5",fontSize:"18",mt:"2"},o.a.createElement(Be.b,null,o.a.createElement(Te,{icon:Z.a,label:"title",data:e.title,iconColor:a+".600"}),o.a.createElement(Te,{icon:Z.n,label:"author",data:e.author,iconColor:a+".600"}),o.a.createElement(Te,{icon:Z.l,label:"genres",data:function(e){for(var a="",t=0;t<e.length;t++)a+=e[t]+", ";return a.substr(0,a.length-2)}(l),iconColor:a+".600"}),o.a.createElement(Te,{icon:Z.c,label:"pages read",data:e.pagesRead+" / "+e.pages,iconColor:a+".600"}),0===e.rating||o.a.createElement(Te,{icon:Z.j,label:"your rating",data:o.a.createElement(Se,{starsFilled:e.rating,starSize:6}),iconColor:a+".600"}))))))},ze=t(226),Le=t(223),Ne=Object(O.b)({name:"color",initialState:"pink",reducers:{changeColor:function(e,a){return a.payload}}}),Ve=Ne.actions.changeColor,_e=Ne.reducer,Me=["pink","green","cyan","teal","blue","red","yellow","orange","purple","gray"];var qe=function(){var e=Object(v.b)(),a=Object(v.c)((function(e){return e.color}));return o.a.createElement(ze.a,null,o.a.createElement(ze.g,null,o.a.createElement(f.a,{variant:"unstyled"},"App Color")),o.a.createElement(ze.e,{color:"black",bg:"gray.50"},o.a.createElement(ze.b,null),o.a.createElement(ze.d,null),o.a.createElement(ze.f,null,"Change the app main color"),o.a.createElement(ze.c,null,o.a.createElement(Le.a,{columns:5,textAlign:"center"},Me.map((function(t){return o.a.createElement(Q.b,{key:t},o.a.createElement(d.a,{as:"button",w:"max-content",p:"1",_focus:{outlineColor:"blue.200"},value:t,onClick:function(){e(Ve(t))}},o.a.createElement(d.a,{h:"7",w:"7",bg:t+".300",borderRadius:"full",borderWidth:"thin",borderColor:t+".600",_active:{bg:t+".600"}},t!==a||o.a.createElement(E.a,{color:t+".800",as:Z.d}))))}))))))};var De=function(){var e=Object(v.c)((function(e){return e.color}));return o.a.createElement("nav",null,o.a.createElement(h.a,{h:"12",w:"100%",bg:e+".600",color:"white",justify:"space-around",alignItems:"center"},o.a.createElement(d.a,{fontSize:"22"},o.a.createElement(m.b,{to:"/"},"React Library")),o.a.createElement(h.a,{alignItems:"center"},o.a.createElement(d.a,null,"Language"),o.a.createElement(d.a,{ml:"6"},o.a.createElement(qe,null)),o.a.createElement(d.a,{ml:"6"},"About"))))};var Ge=function(){return o.a.createElement(c.a,{theme:u},o.a.createElement(m.a,null,o.a.createElement(De,null),o.a.createElement(g.c,null,o.a.createElement(g.a,{path:"/books/:bookId"},o.a.createElement(Fe,null)),o.a.createElement(g.a,{path:"/",exact:!0},o.a.createElement(Ce,null)),o.a.createElement(g.a,{path:"*"},"error 404"))))},Pe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,239)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,o=a.getLCP,l=a.getTTFB;t(e),n(e),r(e),o(e),l(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ye=Object(O.b)({name:"genres",initialState:{genreArray:["Drama","Comedy","Epic","Romance","Young Adult","Children","Nonfiction","Sci-fi","Biografy","Adventure","Horror","Mystery","Thriller","Self Help","History","Psychology","Dystopia","Art","Science","Suspense","Crime","Classic"].sort((function(e,a){return e<a?-1:1}))},reducers:{}}).reducer,He=Object(O.a)({reducer:{books:q,color:_e,genres:Ye}});i.a.render(o.a.createElement(r.StrictMode,null,o.a.createElement(n.ColorModeScript,null),o.a.createElement(v.a,{store:He},o.a.createElement(Ge,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),Pe()}},[[178,1,2]]]);
//# sourceMappingURL=main.65d9108f.chunk.js.map