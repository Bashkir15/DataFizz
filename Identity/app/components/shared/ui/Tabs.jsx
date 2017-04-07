import React, { PropTypes } from 'react';

class Tabs extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: this.props.selected,
		};
	}


	onClick(index, event) {
		event.preventDefault();

		this.setState({
			selected: index,
		});
	}


	renderTitle() {
		function labels(child, index) {
			const activeClass = (this.state.selected === index ? 'is-active' : '');

			return (
				<li role='tab' key={index} aria-controls={`panel${index}`}>
					<button className={activeClass} onClick={this.onClick.bind(this, index)}>
						{child.props.label}
					</button>
				</li>
			);
		}

		return (
			<ul className="tabs-label" role="tablist">
				{this.props.children.map(labels.bind(this))}
			</ul>
		);
	}

	render() {
		return (
			<div className="tabs">
				{this.renderTitle()}

				<div className="tabs-content">
					{this.props.children[this.state.selected]}
				</div>
			</div>
		);
	}
}

Tabs.defaultProps = {
	selected: 0,
};

Tabs.propTypes = {
	selected: PropTypes.number,
	children: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.element,
	]).isRequired,
};

export default Tabs;