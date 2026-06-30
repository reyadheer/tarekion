import Image from 'next/image';
import { Phone, MessageCircle, CheckCircle, XCircle, ChevronRight } from 'lucide-react';
import { getWhatsAppEquipmentLink, PHONE_NUMBER } from '@/lib/utils';

interface Equipment {
  id: string;
  name: string;
  nameAr: string;
  category: string;
  image: string;
  description: string;
  descriptionAr: string;
  available: boolean;
  priceNote: string;
}

interface EquipmentCardProps {
  equipment: Equipment;
  compact?: boolean;
}

export default function EquipmentCard({ equipment, compact = false }: EquipmentCardProps) {
  const waLink = getWhatsAppEquipmentLink(equipment.name);

  return (
    <article
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-lift group"
      aria-label={`${equipment.name} - Heavy Equipment Rental`}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-100" style={{ height: compact ? '180px' : '220px' }}>
        <Image
          src={equipment.image}
          alt={`${equipment.name} for rent in Saudi Arabia`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span
            className="px-2.5 py-1 rounded-lg text-xs font-bold text-black"
            style={{ backgroundColor: '#F5C518' }}
          >
            {equipment.category}
          </span>
        </div>
        {/* Availability badge */}
        <div className="absolute top-3 right-3">
          {equipment.available ? (
            <span className="flex items-center gap-1 px-2.5 py-1 bg-green-500 text-white rounded-lg text-xs font-bold">
              <CheckCircle size={12} />
              Available
            </span>
          ) : (
            <span className="flex items-center gap-1 px-2.5 py-1 bg-red-500 text-white rounded-lg text-xs font-bold">
              <XCircle size={12} />
              Booked
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-black text-gray-900 text-lg leading-tight mb-1">
          {equipment.name}
        </h3>
        <p className="text-sm text-gray-400 font-medium mb-2" dir="rtl">
          {equipment.nameAr}
        </p>
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-4">
          {equipment.description}
        </p>

        {!compact && (
          <p className="text-xs text-gray-400 mb-4 italic" dir="rtl">
            {equipment.descriptionAr}
          </p>
        )}

        {/* Pricing note */}
        <div
          className="flex items-center justify-between py-2.5 px-3 rounded-xl mb-4"
          style={{ backgroundColor: '#F5C51815' }}
        >
          <span className="text-xs font-medium text-gray-600">Rental Price</span>
          <span className="text-sm font-bold" style={{ color: '#D4A800' }}>
            {equipment.priceNote}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-bold text-black hover:opacity-90 active:scale-95 transition-all"
            style={{ backgroundColor: '#F5C518' }}
            aria-label={`Rent ${equipment.name} via WhatsApp`}
          >
            <MessageCircle size={15} />
            Rent Now
          </a>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-sm font-bold border-2 border-gray-200 text-gray-700 hover:border-gray-400 transition-colors"
            aria-label={`Call to rent ${equipment.name}`}
          >
            <Phone size={15} />
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-sm font-bold bg-green-500 text-white hover:bg-green-400 transition-colors"
            aria-label={`WhatsApp about ${equipment.name}`}
          >
            <MessageCircle size={15} />
          </a>
        </div>

        {/* Arabic CTA hint */}
        <p className="text-xs text-gray-400 text-center mt-2" dir="rtl">
          تواصل معنا للحصول على أفضل سعر
        </p>
      </div>
    </article>
  );
}
