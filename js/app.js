var listName = [];

var $bookAdd = $('#book-add');
var isEdit = false;
var currentIndex = 0;

$bookAdd.on('click', function(e) {
	e.preventDefault();
	var $bookName = $('#book-name');
	var $bookList = $('#book-list');

	if (!isEdit) {
		var name = $bookName.val();
		listName.push(name);

		var html = '';

		html += '<div data-name="' + name + '">';
		html += '<span>' + name +  '</span>';
		html += '</div>';

		$bookList.append(html);
		$bookName.val('');
	} else {
		var name = $bookName.val();
		listName[currentIndex] = name;
		$('div[data-name]').eq(currentIndex).html(name);
		$bookName.val('');
		isEdit = false;
		$bookAdd.html('Add');
	}
});

$(document).on('click', 'div[data-name]', function() {
	var $self = $(this);
	var index = $self.index();
	var $bookName = $('#book-name');

	$bookName.val(listName[index]);
	isEdit = true;
	$bookAdd.html('Save');
	currentIndex = index;
});
