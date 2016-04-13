var jsonArchive = []
var parsedObjects = []
var database = new Object();
$().ready(function () {
  var url = 'http://archive.ourcommunity.is/api/items?pretty_print&callback=?';

  $.getJSON(url, function (archive) {

    jsonArchive = archive;
    console.log(archive.data.length)
    $("div.results").empty();
    for (var i = 0; i < archive.data.length; i++) {
      var addItem = assignData(archive, i);
      // console.log(addItem)
      parsedObjects.push(addItem);
    };

    console.log(parsedObjects)

    database = new makedataBase(parsedObjects);
    database.appendAllTo(".content") //not doing this anymore

    if (typeof addtoQueue == 'function') { //this is specific to index
      // $("div.item").click(function(){
      //   var selection = $(this).html()
      //   addtoQueue(selection);
      // })
    }

    getAllTags();

    //var jQuery_1_4_3 = $.noConflict(true);

  });
});

// $().ready(function () {
//   var url = database.data[index].files.url
//   //console.log(url)

//   $.getJSON(url + "&callback=?", function (object) { //this is done dynamically, so doesn't load in right away!

//     var filePath = object.data[0].file_urls.original;
//     //console.log(filePath)

//     var extension = filePath.substr(filePath.length - 3);

//     var embed = "no media";
//     if (extension == "mp3"){
//       embed = '<audio controls><source src="' + filePath + '" type="audio/mpeg"></audio>'
//     } else if (extension == "jpg") {
//       embed = '<img src="' + filePath + '">'
//     } else if (extension == "pdf") {
//       embed = '<iframe src="' + filePath + '" style="width:718px; height:700px;"></iframe>'
//     } else if (extension == "mp4") {
//       embed = '<video controls src="' + filePath + '"></video>'
//     } else if (extension == "mov") {
//       embed = '<video controls src="' + filePath + '"></video>'
//     }

//     if (typeof loadContent == 'function') { 
//       loadContent(embed); //this is specific to results
//     }


//     database.data[index].media = embed;
//     //mediaList.push(embed)
//     console.log(embed)


//     return embed;


//   });
// });

var uniqueTags = []

function getAllTags() {
  var allTags = [];
  for (var i = 0; i < database.tags.length; i++) {
    for (var j = 0; j < database.tags[i].length; j++) {
      getUniqueTags(database.tags[i][j])
    };
  };
  makeTagDropdown(uniqueTags);
}

function getUniqueTags(tag) {
  var contains = false;
  for (var i = 0; i < uniqueTags.length; i++) {
    if (tag == uniqueTags[i]) {
      contains = true;
    }
  };
  if (contains == false) {
    uniqueTags.push(tag);
  }
}

function makeTagDropdown (tagArray) {
  for (var i = 0; i < tagArray.length; i++) {
    var markup = '<option value="'+ tagArray[i] +'">'+ tagArray[i] +'</option>'
    $("select.tags").append(markup);
  };
}

//var mediaList = [];

function assignData(db, index) {
  var itemName = "no data returned";
  var itemSubhead = "media type"; //subhead is now media type
  var itemDate = "no data returned for date";
  var itemText = "no data returned for text";
  var itemTags = getTags(db, index);
  var itemId = db.data[index].id;
  var itemMedia = "no media"

  if (db.data[index].element_texts[0] != undefined) {
    itemName = db.data[index].element_texts[0].text;
  }
  if (db.data[index].element_texts[1] != undefined) {
    itemSubhead = db.data[index].element_texts[1].text;
  }
  if (db.data[index].element_texts[4] != undefined) {
    itemDate = db.data[index].element_texts[4].text;
  }
  if (db.data[index].element_texts[6] != undefined) {
    itemText = db.data[index].element_texts[6].text;
  }

  if (db.data[index].files.count > 0) {
    itemMedia = getMedia(db, index, entireItem);
    console.log(itemMedia)
  }

  var entireItem = [itemName, itemSubhead, itemDate, itemText, itemTags, itemId]
  var itemObject = {
    "name" : itemName,
    "subhead" : itemSubhead,
    "date" : itemDate,
    "text" : itemText,
    "tags" : itemTags,
    "id" : itemId,
    "media" : itemMedia,
  }

  return itemObject;

}

function getMedia(db, index, item) {
  var url = db.data[index].files.url
  //console.log(url)

  $.getJSON(url + "&callback=?", function (object) { //this is done dynamically, so doesn't load in right away!

    var filePath = object.data[0].file_urls.original;
    //console.log(filePath)

    var extension = filePath.substr(filePath.length - 3);

    var embed = "no media";
    if (extension == "mp3"){
      embed = '<audio controls><source src="' + filePath + '" type="audio/mpeg"></audio>'
    } else if (extension == "jpg") {
      embed = '<img src="' + filePath + '">'
    } else if (extension == "pdf") {
      embed = '<iframe src="' + filePath + '" style="width:718px; height:700px;"></iframe>'
    } else if (extension == "mp4") {
      embed = '<video controls src="' + filePath + '"></video>'
    } else if (extension == "mov") {
      embed = '<video controls src="' + filePath + '"></video>'
    }

    if (typeof loadContent == 'function') { 
      loadContent(db, embed, index); //this is specific to results
    }


    database.data[index].media = embed;
    //mediaList.push(embed)
    //console.log(embed)


    return embed;


  });

}

function getMediaForSlideshow(db, index, item) {
  var url = db.data[index].files.url
  //console.log(url)

  $.getJSON(url + "&callback=?", function (object) { //this is done dynamically, so doesn't load in right away!

    var filePath = object.data[0].file_urls.original;
    //console.log(filePath)

    var extension = filePath.substr(filePath.length - 3);

    var embed = "no media";
    if (extension == "mp3"){
      embed = '<audio controls><source src="' + filePath + '" type="audio/mpeg"></audio>'
    } else if (extension == "jpg") {
      embed = '<img src="' + filePath + '">'
    } else if (extension == "pdf") {
      embed = '<iframe src="' + filePath + '" style="width:718px; height:700px;"></iframe>'
    } else if (extension == "mp4") {
      embed = '<video controls src="' + filePath + '"></video>'
    } else if (extension == "mov") {
      embed = '<video controls src="' + filePath + '"></video>'
    }

    //embed = filePath;
    //console.log(embed)

    database.data[index].media = embed;
    item.push(embed)

    contentArray.push({html: item})
    //$("div#")
    console.log(item)
    //console.log(embed)

    //console.log(database.data[index])

    return embed;


  });

}

function getTags (db, index) {
  var tags = []
  var tagObject = db.data[index].tags;
  for (var i = 0; i < tagObject.length; i++) {
    var tag = tagObject[i].name;
    tags.push(tag);
  };
  return tags
}



//database constructor



function makedataBase (data) {
  this.data = data;

  this.name = []
  this.subhead = []
  this.description = []
  this.mediaType = []
  this.date = []
  this.tags = []
  this.id = []

  for (var i = 0; i < data.length; i++) {
    this.name.push(data[i].name);
    this.subhead.push(data[i].subhead);
    this.description.push(data[i].text);
    this.mediaType.push(data[i].mediaType);
    this.date.push(data[i].date);
    this.tags.push(data[i].tags);
    this.id.push(data[i].id);
  };

  function fixedYear(e) {
    var d = new Date(e);
    var m = d.getMonth();
    var day = d.getDate()

    if (m == 11 && day == 31) {
      var adjustedYear = d.getFullYear() + 1;
      return adjustedYear;
    } else {
      return d.getFullYear();
    }
  }

  this.getYear = function (e) {
    return fixedYear(this.date[e])
  }

  function addEntry (item, e) {
    var tags;
    //console.log(item)
    if (item.tags[e].length > 0) {
      tags = item.tags[e]
    } else {
      tags = "general"
    }

    var activeMedia = "nothing here"

    //console.log(item.data[e].media)

    if (item.data[e].media == undefined) {
      activeMedia = "nothing here"
    } else {
      activeMedia = item.data[e].media
    }

    return '<div class="wrapper">' +
    "<h2>" + item.name[e] + "</h2>" + 
    "<h3>" + item.subhead[e] + "</h3>" +
    "<p>" + activeMedia + "</p>" +
    "<span> date: " + item.date[e] + "</span> <br>" +
    "<span> tags: " + tags + ', general</span><br><button class="add-button" onClick="addtoQueue(' + item.id[e] + ')"> add to queue </button>' +
    "</div>";

  }

  function addTitle(item, e) { //to the thumbnails
    return '<div class="item ui-draggable ui-draggable-handle" item-id="' + item.id[e] + '">' + item.name[e] + '</div>'
  }

  this.searchbyDate = function (divName, startDate, endDate) {
    $(divName).empty();
    $("div.queue").empty();
    var datesFound = false;
    console.log(data.length)
    for (var i = 0; i < data.length; i++) {

      var d = fixedYear(this.date[i])
      if (d >= startDate && d <= endDate) {
        datesFound = true;
        $(divName).append(addEntry(this,i));
        $("div.queue").append(addTitle(this,i));
      }
    };
    if (!datesFound) {
      $(divName).append("search returned no results");
    }
    clickQueueItem();
  }

  this.appendAllTo = function (divName) {
    $(divName).empty();
    $("div.queue").empty();
    for (var i = 0; i < data.length; i++) {
      $(divName).append(addEntry(this,i));
      //console.log("no issues here")
      $("div.queue").append(addTitle(this,i));
    };
    clickQueueItem();
  }

  this.appendThisTo = function (divName, e) {
    $("div." + divName).empty();
    for (var i = 0; i < database.data.length; i++) {
      if (database.data[i].id == e) {
        $("div." + divName).append(addEntry(this,i));
      }
    };
  }


  function clickQueueItem (item) {
    console.log("start this function")
    $("div.item").click(function(){
      console.log("click this function")
      var itemID = $(this).attr("item-id");
      database.appendThisTo("active", itemID);
    })
  }

  function loopthroughTags(divName, tag, item, e) { //am I using this? old?
    var allTags = [];
    for (var i = 0; i < item.tags[e].length; i++) {
      if (item.tags[e][i] == tag) {
        $(divName).append(addEntry(item,e));
      }
    };
  }

  this.mySearchFunction = function () {
      var x = document.getElementById("searchForm").value;
      //document.getElementById("demo").innerHTML = x;
      var count = 0;
      $("div.queue").empty();
    
    for(var i = 0; i < database.data.length; i++){
      //if(database.data[i].name.toLowerCase() == x.toLowerCase()){
      var str = database.data[i].name.toLowerCase();
      var n = str.search(x);
      if (n > (-1)){  
        console.log(database.data[i].name);
        $("div.queue").append(addTitleNew(database.data[i].name,database.data[i].id))
        //database.Search(".content", ui.values[ 0 ], ui.values[ 1 ]))
        count++;
      } 
    }
    console.log("End of search for: " + x + ". " + count + " items found.");
    clickQueueItem(); //this should work!! why not?!?!

       //database.data[]
  }

  this.appendAllByTag = function (divName, tag) {
    $(divName).empty();
    $("div.queue").empty();
    for (var i = 0; i < data.length; i++) {
      for (var j = 0; j < this.tags[i].length; j++) {
        if (this.tags[i][j] == tag) {
          $(divName).append(addEntry(this,i));
          $("div.queue").append(addTitle(this,i));
        }
      };
    };
    clickQueueItem();
  }

  function addTitleNew(item, id) { //to the thumbnails
        return '<div class="item ui-draggable ui-draggable-handle" item-id="' + id + '">' + item + '</div>'
      }


}