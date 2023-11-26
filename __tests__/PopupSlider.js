import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PopupSlider from '../components/PopupSlider';

jest.mock('react-swipeable', () => ({ useSwipeable: jest.fn() }));
jest.mock('next/image', () => require('../mocks/next-image-mock'));

describe('PopupSlider Component', () => {
    const images = [
        { original: 'image1.jpg' },
        { original: 'image2.jpg' },
    ];

    it('renders without crashing', () => {
        render(<PopupSlider onClose={() => {}} images={images} />);
    });

    it('handles next and previous clicks correctly', () => {
        render(<PopupSlider onClose={() => {}} images={images} />);

        const nextButton = screen.getByTestId('next-button');
        const prevButton = screen.getByTestId('prev-button');
        const imageContainer = screen.getByTestId('image-container');

        fireEvent.click(nextButton);
        expect(getComputedStyle(imageContainer).transform).toBe('translateX(-100%)');

        fireEvent.click(prevButton);
        expect(getComputedStyle(imageContainer).transform).toBe('translateX(-0%)');
    });

    it('handles overflow click correctly', () => {
        const onCloseMock = jest.fn();
        render(<PopupSlider onClose={onCloseMock} images={images} />);

        const overflow = screen.getByTestId('popup-overflow');
        fireEvent.click(overflow);
        expect(onCloseMock).toHaveBeenCalledTimes(1);
    });
});