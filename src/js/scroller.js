// D3 is included by globally by default
import enterView from 'enter-view';
import Stickyfill from 'stickyfilljs';

const container = d3.select('#scroller');
const stepSel = container.selectAll('.step');
const figure = container.select('.sticky')

function updateChart(index) {
	const sel = container.select(`[data-index='${index}']`);
	const graphic = sel.attr('data-graphic');
	const graphicIndex = sel.attr('data-graphic-index');
	stepSel.classed('is-active', (d, i) => i === index);
	figure.selectAll('.figure-container')
		.classed('active', false)
	figure.select(`#${graphic}`)
		.classed('active', true)
	const dynamic = figure.select('.active').select('.dynamic')
	dynamic.html('')
	dynamic.text(`Step ${graphicIndex}`)

}

function init() {
	Stickyfill.add(d3.select('.sticky').node());

	enterView({
		selector: stepSel.nodes(),
		offset: 0.25,
		enter: el => {
			const index = +d3.select(el).attr('data-index');
			updateChart(index);
		},
		exit: el => {
			let index = +d3.select(el).attr('data-index');
			index = Math.max(0, index - 1);
			updateChart(index);
		}
	});
}

export default { init };
