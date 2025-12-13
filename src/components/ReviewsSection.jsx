// ClientReviewSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import {
    Star,
    Quote,
    ChevronLeft,
    ChevronRight,
    X,
    Calendar,
    MapPin,
    Upload,
    Image as ImageIcon,
    Trash2
} from 'lucide-react';

const ClientReviewSection = () => {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({
        name: '',
        country: '',
        rating: 5,
        comment: '',
        images: [] // Array to store image URLs
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImages, setLightboxImages] = useState([]);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [uploadedImages, setUploadedImages] = useState([]);
    const scrollRef = useRef(null);
    const fileInputRef = useRef(null);

    // Simulated fetch reviews - Replace with your actual API/Firebase call
    const fetchReviews = async () => {
        // Sample data - Replace with actual database fetch
        const sampleReviews = [
            {
                id: 1,
                name: 'Sarah Johnson',
                country: 'United States',
                rating: 5,
                comment: 'Outstanding work! The developer delivered exactly what we needed. Professional, responsive, and exceeded expectations. Highly recommend!',
                createdAt: new Date('2024-01-15'),
                images: [
                    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop'
                ]
            },
            {
                id: 2,
                name: 'Michael Chen',
                country: 'Singapore',
                rating: 5,
                comment: 'Exceptional quality and attention to detail. The project was completed on time and within budget. Great communication throughout!',
                createdAt: new Date('2024-02-20'),
                images: [
                    'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop'
                ]
            },
            {
                id: 3,
                name: 'Emily Rodriguez',
                country: 'Spain',
                rating: 5,
                comment: 'Best investment for our business! The developer understood our vision perfectly and brought it to life. Couldn\'t be happier!',
                createdAt: new Date('2024-03-10'),
                images: [
                    'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop'
                ]
            }
        ];
        setReviews(sampleReviews);
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    // Auto-scroll reviews
    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current && reviews.length > 0) {
                const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
                const currentScroll = scrollRef.current.scrollLeft;

                if (currentScroll >= maxScroll - 10) {
                    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
                }
            }
        }, 4500);

        return () => clearInterval(interval);
    }, [reviews]);

    // Submit review
    const handleSubmit = async () => {
        if (!newReview.name || !newReview.country || !newReview.comment) {
            setMessage('Please fill all fields');
            setTimeout(() => setMessage(''), 3000);
            return;
        }

        setIsSubmitting(true);
        setMessage('');

        try {
            // Here you would upload images to your storage (Firebase Storage, AWS S3, etc.)
            // and get the URLs, then save to database
            const reviewData = {
                ...newReview,
                images: uploadedImages, // In production, replace with actual uploaded URLs
                createdAt: new Date()
            };

            // Add to reviews (in production, this would be a database call)
            setReviews(prev => [reviewData, ...prev]);

            setMessage('Review submitted successfully!');
            setNewReview({ name: '', country: '', rating: 5, comment: '', images: [] });
            setUploadedImages([]);
            setTimeout(() => setMessage(''), 3000);
        } catch (error) {
            setMessage('Error submitting review. Please try again.');
            console.error('Error adding review:', error);
            setTimeout(() => setMessage(''), 3000);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Lightbox functions
    const openLightbox = (images, startIndex) => {
        setLightboxImages(images);
        setLightboxIndex(startIndex);
        setLightboxOpen(true);
    };

    const nextLightboxImage = () => {
        setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
    };

    const prevLightboxImage = () => {
        setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
    };

    // Image Carousel Component
    const ImageCarousel = ({ images }) => {
        const [currentSlide, setCurrentSlide] = useState(0);
        const carouselRef = useRef(null);

        const nextSlide = () => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        };

        const prevSlide = () => {
            setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
        };

        const goToSlide = (index) => {
            setCurrentSlide(index);
        };

        // Auto slide
        useEffect(() => {
            if (images.length > 1) {
                const interval = setInterval(() => {
                    nextSlide();
                }, 3000);
                return () => clearInterval(interval);
            }
        }, [images.length, currentSlide]);

        // Scroll carousel
        useEffect(() => {
            if (carouselRef.current) {
                carouselRef.current.scrollTo({
                    left: currentSlide * carouselRef.current.offsetWidth,
                    behavior: 'smooth'
                });
            }
        }, [currentSlide]);

        if (!images || images.length === 0) {
            return (
                <div className="h-56 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                    <ImageIcon className="text-gray-600" size={48} />
                </div>
            );
        }

        return (
            <div className="relative h-56 w-full overflow-hidden group">
                <div
                    ref={carouselRef}
                    className="flex overflow-x-hidden h-full snap-x snap-mandatory"
                >
                    {images.map((image, idx) => (
                        <div
                            key={idx}
                            className="min-w-full h-full snap-start cursor-pointer"
                            onClick={() => openLightbox(images, idx)}
                        >
                            <img
                                src={image}
                                alt={`Slide ${idx + 1}`}
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    ))}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none"></div>

                {images.length > 1 && (
                    <>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                prevSlide();
                            }}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all z-10"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                nextSlide();
                            }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all z-10"
                        >
                            <ChevronRight size={20} />
                        </button>

                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                            {images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        goToSlide(idx);
                                    }}
                                    className={`transition-all rounded-full ${idx === currentSlide
                                            ? 'bg-purple-400 w-6 h-2'
                                            : 'bg-white/50 hover:bg-white/80 w-2 h-2'
                                        }`}
                                />
                            ))}
                        </div>

                        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full text-white text-xs font-medium z-10">
                            {currentSlide + 1} / {images.length}
                        </div>
                    </>
                )}
            </div>
        );
    };

    return (
        <section id="reviews" className="relative py-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 dot-pattern opacity-20"></div>
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 section-container">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center space-x-3 mb-4">
                        <Star className="text-purple-400" size={40} />
                        <h2 className="text-5xl md:text-6xl font-bold text-gradient-primary">
                            Client Reviews
                        </h2>
                    </div>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Discover why clients love working with me
                    </p>
                </div>

                {/* Reviews Carousel */}
                <div className="mb-16">
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
                    >
                        {reviews.length === 0 ? (
                            <div className="w-full flex items-center justify-center py-20">
                                <div className="text-center">
                                    <Star className="text-6xl text-gray-700 mx-auto mb-4" size={64} />
                                    <p className="text-gray-500 text-lg">No reviews yet. Be the first to share!</p>
                                </div>
                            </div>
                        ) : (
                            reviews.map((review, index) => (
                                <div
                                    key={review.id}
                                    className="flex-shrink-0 w-[380px] snap-center animate-slideUp"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 h-full flex flex-col shadow-2xl hover:shadow-purple-500/20 overflow-hidden hover:-translate-y-2">
                                        <ImageCarousel images={review.images} />

                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex gap-1 mb-4">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={20}
                                                        className={`${i < review.rating
                                                                ? 'text-yellow-400 fill-yellow-400'
                                                                : 'text-gray-600'
                                                            }`}
                                                    />
                                                ))}
                                            </div>

                                            <Quote className="text-purple-400/30 mb-3" size={32} />

                                            <p className="text-gray-300 leading-relaxed mb-6 flex-grow line-clamp-4">
                                                "{review.comment}"
                                            </p>

                                            <div className="flex items-center gap-4 pt-6 border-t border-slate-700">
                                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl shadow-lg flex-shrink-0">
                                                    {review.name.charAt(0).toUpperCase()}
                                                </div>
                                                <div className="min-w-0">
                                                    <h4 className="text-white font-semibold text-lg truncate">
                                                        {review.name}
                                                    </h4>
                                                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                                                        <MapPin size={14} />
                                                        <span className="truncate">{review.country}</span>
                                                    </div>
                                                    <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
                                                        <Calendar size={12} />
                                                        <span>
                                                            {review.createdAt?.toLocaleDateString('en-GB', {
                                                                day: '2-digit',
                                                                month: 'short',
                                                                year: 'numeric'
                                                            })}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Submit Review Form */}
                <div className="max-w-2xl mx-auto">
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 shadow-2xl">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-4 shadow-lg shadow-purple-500/30">
                                <Star className="text-white" size={32} />
                            </div>
                            <h3 className="text-3xl font-bold mb-2 text-gradient-primary">
                                Share Your Experience
                            </h3>
                            <p className="text-gray-400">
                                Your feedback helps us improve
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        value={newReview.name}
                                        onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                                        className="input-field"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Country
                                    </label>
                                    <input
                                        type="text"
                                        value={newReview.country}
                                        onChange={(e) => setNewReview({ ...newReview, country: e.target.value })}
                                        className="input-field"
                                        placeholder="United States"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-3">
                                    Rating
                                </label>
                                <div className="flex gap-3 justify-center bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                                    {[1, 2, 3, 4, 5].map((rating) => (
                                        <button
                                            key={rating}
                                            type="button"
                                            onClick={() => setNewReview({ ...newReview, rating })}
                                            className={`text-4xl transition-all hover:scale-110 ${rating <= newReview.rating
                                                    ? 'text-yellow-400'
                                                    : 'text-gray-600 hover:text-gray-500'
                                                }`}
                                        >
                                            <Star
                                                size={36}
                                                className={rating <= newReview.rating ? 'fill-yellow-400' : ''}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Comment
                                </label>
                                <textarea
                                    value={newReview.comment}
                                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                                    rows="4"
                                    className="textarea-field"
                                    placeholder="Share your experience..."
                                />
                            </div>

                            <button
                                type="button"
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="btn-primary w-full"
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Review'}
                            </button>

                            {message && (
                                <p
                                    className={`text-sm text-center ${message.includes('successfully')
                                            ? 'text-green-400'
                                            : 'text-red-400'
                                        }`}
                                >
                                    {message}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            {lightboxOpen && (
                <div
                    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                    onClick={() => setLightboxOpen(false)}
                >
                    <button
                        onClick={() => setLightboxOpen(false)}
                        className="absolute top-6 right-6 text-white hover:text-purple-400 transition-colors z-10 bg-black/50 p-3 rounded-full hover:bg-black/70"
                    >
                        <X size={24} />
                    </button>

                    <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={lightboxImages[lightboxIndex]}
                            alt="Review"
                            className="w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                        />

                        {lightboxImages.length > 1 && (
                            <>
                                <button
                                    onClick={prevLightboxImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-purple-500/80 text-white p-4 rounded-full transition-all backdrop-blur-sm"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={nextLightboxImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-purple-500/80 text-white p-4 rounded-full transition-all backdrop-blur-sm"
                                >
                                    <ChevronRight size={24} />
                                </button>

                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm px-6 py-3 rounded-full text-white font-medium">
                                    {lightboxIndex + 1} / {lightboxImages.length}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}

            <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
        </section>
    );
};

export default ClientReviewSection;