using System.Collections.Generic;

namespace DroneDelivery.Ordering
{
    public abstract class EventSourcedAggregate : Entity
    {
        public List<DomainEvent> Changes { get; set; }
        public int Version { get; set; }

        public EventSourcedAggregate()
        {
            Changes = new List<DomainEvent>();
        }

        public abstract void Apply(DomainEvent changes);
    }
}