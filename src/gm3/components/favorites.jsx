/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 GeoMoose
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { connect } from 'react-redux';
import React, {Component, PropTypes } from 'react';

import { Catalog } from './catalog';


export class FavoriteLayers extends Catalog {

    constructor() {
        super();
    }

    shouldRenderNode(node) {
        return (!node.children && node.favorite);
    }

    renderTreeNode(childId) {
        let node = this.props.catalog[childId];
        if(this.shouldRenderNode(node)) {
            return this.renderLayer(node);
        }
        return '';
    }

    render() {
        return (
            <div className="catalog favorites flat">
                {
                    Object.keys(this.props.catalog).map(this.renderTreeNode)
                }
            </div>
        );
    }
}


const mapFavoritesToProps = function(store) {
    return {
        catalog: store.catalog
    }
}

export default connect(mapFavoritesToProps)(FavoriteLayers);