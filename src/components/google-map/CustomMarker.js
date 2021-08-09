/*jshint esnext: true */
import _ from 'underscore';

export default class CustomMarker {
    constructor(map, data) {
        this.data = data;
        this.div = null;

        this.latlng = new window.google.maps.LatLng(parseFloat(this.data.lat), parseFloat(this.data.lng));

        _.extend(this, new window.google.maps.OverlayView());

        this.setMap(map);
    }

    draw() {
        if (!this.div) {
            var html = `
			<h6>${this.data.naziv}</h6>
			<img src="${this.data.FileName}" />
			<div class="details">
				
			</div>
			`;

            this.div = document.createElement('div');
            this.div.classList.add('map-label');
            this.div.style.width = this.div.style.height = 100;
            this.div.innerHTML = html;

            window.google.maps.event.addDomListener(this.div, 'click', event => {
                //this.div.classList.toggle('open');
            });

            //$(this.div).on('click', '.close', () => {});

            var panes = this.getPanes();
            panes.overlayMouseTarget.appendChild(this.div);
        }

        var point = this.getProjection().fromLatLngToDivPixel(this.latlng);

        if (point) {
            this.div.style.left = point.x - this.div.offsetWidth / 2 + 'px';
            this.div.style.top = point.y - this.div.offsetHeight + 'px';
        }
    }

    remove() {
        if (this.div) {
            this.div.parentNode.removeChild(this.div);
            this.div = null;
        }
    }

    getDraggable() {}

    getPosition() {
        return this.latlng;
    }

    showDetails(item) {
        /* var html = MarkerTemplate({ item: item });
        $(this.div).html(html);
        $(this.div).addClass('open'); */
    }

    hide() {
        /* $(this.div).removeClass('open'); */
    }
}
