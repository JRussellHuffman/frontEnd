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

    database = new makedataBase(parsedObjects);
    database.appendAllTo(".content")

    if (typeof loadContent == 'function') { 
      loadContent(); //this is specific to results
    }

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

function assignData(db, index) {
  var itemName = "no data returned";
  var itemSubhead = "no data returned for subhead";
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

  var entireItem = [itemName, itemSubhead, itemDate, itemText, itemTags, itemId]
  var itemObject = {
    "name" : itemName,
    "subhead" : itemSubhead,
    "date" : itemDate,
    "text" : itemText,
    "tags" : itemTags,
    "id" : itemId,
  }

  // if (db.data[index].files.count > 0) {
  //   getMedia(db, index, entireItem);
  // } else {
  //   addToPage(itemName, itemSubhead, itemDate, itemMedia, itemText, itemTags, itemId)
  // }

  return itemObject;

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
    //this.mediaType.push(data[i].mediaType);
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
    return '<div class="wrapper">' +
    "<h2>" + item.name[e] + "</h2>" + 
    "<h3>" + item.subhead[e] + "</h3>" +
    "<p>" + item.description[e] + "</p>" +
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
      console.log("no issues here")
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
    $("div.item").click(function(){
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

}