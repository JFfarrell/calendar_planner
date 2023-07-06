package app.service;

import app.model.Activity;
import app.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ActivityService {

    @Autowired
    ActivityRepository activityRepository;

    public List<Activity> getActivitiesFilteredByType(String activity_type) {
        return activityRepository
            .findAll()
            .stream()
            .filter(
            activity -> activity.getActivity_type()
            .equals(activity_type))
            .collect(Collectors.toList());
    }
}
