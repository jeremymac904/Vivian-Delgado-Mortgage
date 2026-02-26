import React, { useEffect, useMemo, useState } from 'react';
import Seo from '../components/Seo';
import { useLocale } from '../i18n/locale';
import { REVIEWS_FALLBACK } from '@/data/reviewsFallback';

type ReviewItem = {
  id: string;
  source: 'Google' | 'Zillow';
  author: string;
  rating: number;
  date: string;
  text: string;
};

type ReviewsApiResponse = {
  hasGoogle?: boolean;
  hasZillow?: boolean;
  google?: {
    aggregate?: { rating?: number; count?: number };
    reviews?: Array<{
      source?: string;
      authorName?: string;
      rating?: number;
      text?: string;
      date?: string;
    }>;
  };
  zillow?: {
    aggregate?: { rating?: number; count?: number };
    reviews?: Array<{
      source?: string;
      authorName?: string;
      rating?: number;
      text?: string;
      date?: string;
    }>;
  };
};

const normalizeLiveReview = (
  review: { source?: string; authorName?: string; rating?: number; text?: string; date?: string },
  index: number
): ReviewItem => ({
  id: `live-${index}`,
  source: review.source?.toLowerCase().includes('zillow') ? 'Zillow' : 'Google',
  author: review.authorName || 'Verified Client',
  rating: review.rating || 5,
  date: review.date || '',
  text: review.text || 'No review text provided.'
});

const ReviewsPage: React.FC = () => {
  const [data, setData] = useState<ReviewsApiResponse | null>(null);
  const [usingFallback, setUsingFallback] = useState(false);
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState<'all' | 'google' | 'zillow'>('all');
  const locale = useLocale();

  useEffect(() => {
    const apiBase = import.meta.env.VITE_API_BASE || (window.location.hostname.includes('netlify') ? '/.netlify/functions' : '/api');
    const load = async () => {
      try {
        const res = await fetch(`${apiBase}/reviews`);
        if (!res.ok) throw new Error('reviews-request-failed');
        const contentType = res.headers.get('content-type') || '';
        if (!contentType.toLowerCase().includes('application/json')) {
          throw new Error('reviews-non-json-response');
        }
        try {
          const json = (await res.json()) as ReviewsApiResponse;
          setData(json);
          setUsingFallback(false);
        } catch {
          throw new Error('reviews-json-parse-failed');
        }
      } catch {
        setData(null);
        setUsingFallback(true);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const reviews = useMemo(() => {
    const all: ReviewItem[] = usingFallback
      ? REVIEWS_FALLBACK
      : [
          ...(data?.google?.reviews || []),
          ...(data?.zillow?.reviews || [])
        ].map(normalizeLiveReview);

    const filtered =
      source === 'all'
        ? all
        : all.filter((r) => r.source.toLowerCase() === source);
    return filtered.sort((a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime());
  }, [data, source, usingFallback]);

  return (
    <section className="py-16">
      <Seo
        title={locale === 'es' ? 'Reseñas | Vivian Delgado Mortgage' : 'Reviews | Vivian Delgado Mortgage'}
        description={
          locale === 'es'
            ? 'Reseñas verificadas de fuentes oficiales, con filtros claros y transparencia.'
            : 'Verified reviews from official sources, with clear filters and transparent display.'
        }
        canonical={`/${locale}/reviews`}
        locale={locale}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
          {locale === 'es' ? 'Reseñas' : 'Reviews'}
        </h1>
        <p className="text-gray-300 mb-8">
          {locale === 'es' ? 'Mostramos solo fuentes oficiales. Sin scraping.' : 'We only show official sources. No scraping.'}
        </p>

        <div className="flex gap-3 mb-6">
          {['all', 'google', 'zillow'].map((k) => (
            <button
              key={k}
              onClick={() => setSource(k as any)}
              className={`px-4 py-2 rounded font-bold ${source === k ? 'btn-metal btn-metal--primary text-white' : 'btn-glass text-gray-200'}`}
            >
              {k === 'all' ? (locale === 'es' ? 'Todas' : 'All') : k.toUpperCase()}
            </button>
          ))}
        </div>

        {loading && (
          <div className="p-6 noir-panel rounded-xl text-gray-300">
            {locale === 'es' ? 'Cargando reseñas...' : 'Loading reviews...'}
          </div>
        )}

        {!loading && (
          <>
            {usingFallback && (
              <div className="p-4 mb-6 rounded border border-white/20 bg-white/5 text-sm text-gray-300">
                {locale === 'es'
                  ? 'Las reseñas en vivo no están disponibles temporalmente, mostrando destacados recientes.'
                  : 'Live reviews are temporarily unavailable, showing recent highlights.'}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 noir-panel rounded-xl">
                <h3 className="font-bold mb-2">{locale === 'es' ? 'Reseñas de Google' : 'Google Reviews'}</h3>
                {!usingFallback && data?.hasGoogle ? (
                  <p>
                    {locale === 'es'
                      ? `Calificación ${data.google?.aggregate?.rating || "N/A"} con ${data.google?.aggregate?.count || 0} reseñas.`
                      : `Rating ${data.google?.aggregate?.rating || "N/A"} with ${data.google?.aggregate?.count || 0} reviews.`}
                  </p>
                ) : (
                  <p className="text-gray-300">
                    {locale === 'es'
                      ? 'Las reseñas de Google requieren conexión oficial a la API.'
                      : 'Google reviews require an official API connection.'}
                  </p>
                )}
              </div>
              <div className="p-6 noir-panel rounded-xl">
                <h3 className="font-bold mb-2">{locale === 'es' ? 'Reseñas de Zillow' : 'Zillow Reviews'}</h3>
                {!usingFallback && data?.hasZillow ? (
                  <p>
                    {locale === 'es'
                      ? `Calificación ${data.zillow?.aggregate?.rating || "N/A"} con ${data.zillow?.aggregate?.count || 0} reseñas.`
                      : `Rating ${data.zillow?.aggregate?.rating || "N/A"} with ${data.zillow?.aggregate?.count || 0} reviews.`}
                  </p>
                ) : (
                  <div className="text-gray-300">
                    {locale === 'es' ? 'Reseñas de Zillow disponibles pronto.' : 'Zillow reviews available soon.'}
                    <div className="mt-2">
                      <a className="text-[#F36F20] font-bold" href="https://www.zillow.com" target="_blank" rel="noreferrer">
                        {locale === 'es' ? 'Ver perfil de Zillow' : 'View Zillow Profile'}
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6 noir-panel rounded-xl md:col-span-2">
                <h3 className="font-bold mb-2">{locale === 'es' ? 'Reseñas de Loan Factory' : 'Loan Factory Reviews'}</h3>
                <p className="text-gray-300">
                  {locale === 'es' ? 'Enlazamos a testimonios oficiales cuando existen.' : 'We link to official testimonials when available.'}
                </p>
                <a className="text-[#F36F20] font-bold" href="https://www.loanfactory.com" target="_blank" rel="noreferrer">
                  {locale === 'es' ? 'Testimonios de Loan Factory' : 'Loan Factory Testimonials'}
                </a>
              </div>
            </div>

            {reviews.length === 0 && (
              <div className="p-6 noir-panel rounded-xl">
                {locale === 'es' ? 'No hay reseñas para mostrar aún.' : 'No reviews to display yet.'}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((r) => (
                <div key={r.id} className="p-6 noir-panel rounded-xl">
                  <div className="flex justify-between mb-2">
                    <span className="font-bold">{r.author}</span>
                    <span className="text-sm text-gray-400">{r.source}</span>
                  </div>
                  {r.rating && <div className="text-sm text-gray-300 mb-2">Rating: {r.rating}</div>}
                  <p className="text-gray-200">{r.text || 'No review text provided.'}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ReviewsPage;
