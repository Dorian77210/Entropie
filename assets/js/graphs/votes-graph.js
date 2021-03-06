const GRAPH_DIV_CLASS = "graph-div-class";
const GRAPH_CONTAINER_CLASS = ".graph-container";
const EMPTY_GRAPH_DIV = "<div class='" + GRAPH_DIV_CLASS + "'></div>";

displayGraph = (student, subjects) => {
    // remove all graphs
    $(GRAPH_CONTAINER_CLASS).empty();

    const ASIDE_WIDTH = $('.students-container').width();
    const HEIGHT_HEADER = $('header').height();

    $(GRAPH_CONTAINER_CLASS).css('padding-top', HEIGHT_HEADER + 'px');
    var entropy = 0.0;

	subjects.forEach( (subject, index) => {
		const div = $(GRAPH_CONTAINER_CLASS).append(EMPTY_GRAPH_DIV);
				
		const globalCanvas = $('<canvas/>').css({ width: 3000, height: 750, 'margin-left': ASIDE_WIDTH + 'px' }).attr('id', 'global-chart' + index);

		const individualCanvas = $('<canvas/>').css( { width: 3000, height: 300, 'margin-left': ASIDE_WIDTH + 'px' } ).attr('id', 'individual-chart' + index);

		div.append(globalCanvas);
		div.append(individualCanvas);

		const data = DataExtractor.getCountForStudentBySubject(subject);	

		const sortedMap = DataExtractor.sortedData(data);

		// retrieve labels and datasets
		const labels = Object.keys(sortedMap);
		const datasets = Object.values(sortedMap);

		//find the max of the value
		var max = 0;
		datasets.forEach( (dataset, index) => {
			if(max < dataset) max = dataset;
		});

		// map doesn't work...
		for(let i = 0; i < datasets.length; i++) {
			datasets[i] /= max;
		}

		const globalChartContext = document.getElementById('global-chart' + index).getContext('2d');

		const globalChart = new Chart(globalChartContext, {
			type: 'bar',
			data: {
				labels: labels,
				datasets: [{
					label: '# votes globaux de la matière ' + subject,
					data: datasets,
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)'
					],
					borderColor: [
						'rgba(255,99,132,1)'
					],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					yaxes: [{
						ticks: {
							beginAtZero: true
						}
					}]
				}
			}
		});


		// individual graph
		const studentRow = getVoteRow(subject, student);

		const individualChartContext = document.getElementById('individual-chart' + index).getContext('2d');

		const individualChart = new Chart(individualChartContext, {
			type: 'bar',
			data: {
				labels: labels,
				datasets: [{
					label: '# des votes individuels de la matière ' + subject + ' de ' + student,
					data: studentRow,
					backgroundColor: [
						'rgba(255, 0, 0, 0.2)'
					],
					borderColor: [
						'rgba(255,  99, 132, 1)'
					],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					yaxes: [{
						ticks: {
							beginAtZero: true
						}
					}]
				}
			}
        });	

        const currentEntropy = generateEntropy(subject, student);
        const entropyPercentage = (currentEntropy * 100).toFixed(2);
        $(GRAPH_CONTAINER_CLASS).append('<p class="information">Entropie : ' + entropyPercentage + '%</p>');

        entropy += currentEntropy;

	});

    entropy /= subjects.length;
    const entropyPercentage = (entropy * 100).toFixed(2);

    $(GRAPH_CONTAINER_CLASS).append('<p class="information">Entropie général : ' + entropyPercentage + '%</p>');

}